
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { action, username, password, role, requesterAuth } = req.body;

  // Basic security check: Only allow certain actions
  if (!['addUser', 'removeUser'].includes(action)) {
    return res.status(400).json({ error: 'Invalid action' });
  }

  try {
    if (action === 'addUser') {
      // 1. Create user in Auth (using a dummy email format for simplicity with usernames)
      const email = `${username.toLowerCase().replace(/\s+/g, '_')}@shivanimate.local`;
      const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { username, role }
      });

      if (authError) throw authError;

      // 2. Add to profiles table
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{ id: authData.user.id, username, role }]);

      if (profileError) throw profileError;

      return res.status(200).json({ message: `User ${username} created successfully.` });
    }

    if (action === 'removeUser') {
      // 1. Find user id from profiles
      const { data: profile, error: findError } = await supabase
        .from('profiles')
        .select('id')
        .eq('username', username)
        .single();

      if (findError) throw findError;

      // 2. Delete from Auth
      const { error: deleteError } = await supabase.auth.admin.deleteUser(profile.id);
      if (deleteError) throw deleteError;

      // 3. Delete from profiles (should be cascaded or manual)
      await supabase.from('profiles').delete().eq('id', profile.id);

      return res.status(200).json({ message: `User ${username} removed successfully.` });
    }

  } catch (error) {
    console.error('Admin API Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
