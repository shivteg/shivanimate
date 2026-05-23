# ✦ ShivAnimate

> **Animate any word. Share the magic.**

A fun, production-ready web app that lets users **sign up/sign in via Supabase Auth**, type a word (up to 9 characters), choose an animation style, and **share a public link** that anyone can view — no login required to view shared animations.

**Live demo → deploy on Vercel in 2 minutes.**

---

## ✨ Features

| Feature | Details |
|---|---|
| 🔐 Auth | Supabase email/password sign up & sign in |
| 🔤 Word Animator | Type up to 9 characters and animate them |
| 🎨 6 Animation Styles | Pop, Wave, Glitch, Fire, Spin, Rainbow |
| 🔗 Public Share Link | Hash-based URL — anyone can view, no login needed |
| 🌙 Dark / Light Mode | Toggleable, defaults to dark |
| 📱 Responsive | Works great on mobile and desktop |

---

## 🚀 Deploy in 2 Minutes

### 1. Clone & configure Supabase

```bash
git clone https://github.com/Lottie128/shivanimate.git
cd shivanimate
```

Open `index.html` and replace the two placeholders at the top of the `<script>` block:

```js
const SUPABASE_URL = 'YOUR_SUPABASE_URL';       // e.g. https://xxxx.supabase.co
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';  // your anon/public key
```

Get these from **[Supabase Dashboard](https://supabase.com/dashboard)** → your project → Settings → API.

> **No database tables needed.** ShivAnimate only uses Supabase Auth — no custom tables required.

### 2. Enable Email Auth in Supabase

In your Supabase project → **Authentication → Providers → Email** — make sure it's enabled.

For instant login without email confirmation during testing:
- Go to **Authentication → Settings → Disable email confirmation** ✓

### 3. Deploy to Vercel

**Option A — Vercel CLI:**
```bash
npm i -g vercel
vercel
```

**Option B — Vercel Dashboard:**
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo → Deploy
4. Done! 🎉

No build step, no framework config needed — it's a static HTML file.

### 4. Set Supabase Redirect URL (for production)

In Supabase → **Authentication → URL Configuration → Site URL** → set your Vercel URL:
```
https://your-project.vercel.app
```

Also add to **Redirect URLs**:
```
https://your-project.vercel.app/**
```

---

## 🎮 How It Works

```
User visits site
  ↓
Auth wall (Sign in / Sign up via Supabase)
  ↓
Animate view: type a word → choose style → click Animate
  ↓
Word animates letter-by-letter in the stage
  ↓
Share bar shows a link: https://yoursite.com/#animate/HELLO/pop
  ↓
Anyone who opens that link sees the animation — no login needed
```

### Share Link Format
```
https://yoursite.com/#animate/{WORD}/{STYLE}
```
Example: `https://shivanimate.vercel.app/#animate/SHIVA/rainbow`

---

## 🎨 Animation Styles

| Style | Description |
|---|---|
| **Pop** | Letters bounce in with spring physics + neon glow loop |
| **Wave** | Letters wave in like ocean ripples |
| **Glitch** | Glitchy flickering entrance |
| **Fire** | Letters ignite from below |
| **Spin** | 3D Y-axis flip entrance |
| **Rainbow** | Pop entrance + continuous rainbow color cycling |

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | Vanilla HTML/CSS/JS — zero framework |
| Auth | [Supabase Auth](https://supabase.com/auth) via CDN |
| Hosting | [Vercel](https://vercel.com) (static) |
| Fonts | Space Grotesk + Space Mono (Google Fonts) |

---

## 📁 Project Structure

```
shipanimate/
├── index.html       ← Entire app (auth + animate + public view)
├── README.md
└── vercel.json      ← Static routing config
```

---

## 🔧 Customization

- **Add more styles**: Extend `ANIM_MAP` and `@keyframes` in the CSS
- **Change colors**: Edit `LETTER_COLORS` array in JS
- **Add username**: Store display names in Supabase `profiles` table
- **Animation history**: Create an `animations` table in Supabase to save past words

---

## 📜 License

MIT — free to use, remix, and deploy.

---

Built with ✦ by [Zero AI Technologies](https://github.com/Lottie128)
