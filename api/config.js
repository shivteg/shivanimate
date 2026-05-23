// Vercel Serverless Function — exposes Supabase public config as JSON
// SUPABASE_URL and SUPABASE_ANON_KEY must be set in Vercel project settings
export default function handler(req, res) {
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return res.status(500).json({
      error: 'SUPABASE_URL or SUPABASE_ANON_KEY not set in Vercel environment variables'
    });
  }

  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.status(200).json({ url, anonKey });
}
