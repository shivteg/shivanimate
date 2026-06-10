# ✦ ShivAnimate

> **Animate any word. Watch it explode in 3D.**

A fun, production-ready web app that lets users type a word (up to 9 characters), choose an animation style, and **share a public link** that anyone can view — no login required to view shared animations.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🔐 Auth | Local system with Admin, Teacher, and Student roles |
| 🔤 Word Animator | Type up to 9 characters and animate them |
| 🎨 20 Animation Styles | Pop, Wave, Glitch, Fire, Spin, Rainbow, Orbit, Chrome, Matrix, Storm, Neon, Fracture, Vortex, Pulse, Float, Jelly, Ghost, Blacklight, Hyper, Disco |
| 🔗 Public Share Link | Hash-based URL — anyone can view, no login needed |
| 🌙 Dark / Light Mode | Toggleable, defaults to dark |
| 📱 Responsive | Works great on mobile and desktop |

---

## 🔐 Access & Accounts

The system comes with several pre-configured accounts:

### 👑 Admin
- **Username:** `shivteg`
- **Password:** `teg2172014`

### 🏫 Teachers (Access Dashboard + Animate)
- **aditi:** `aditi_arora`
- **Drishti:** `drishti.school`
- **shivteg:** `00#`

### 🎓 Students (Access Animate ONLY)
- **s 1:** `00`
- **st. 3:** `00`
- **s0111:** `00`
- **s1:** `00`
- **Ravi:** `00`
- **Shivteg:** `00`
- **parneet:** `parneet`

> **🔒 Access Note:** Students are strictly restricted to the "Animate" view. Only Teachers and Admins can access the Dashboard to manage users.
>
> **⚠️ Verification:** Adding new users via the Dashboard requires WhatsApp verification (message - 8054830509).

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Lottie128/shivanimate.git
cd shivanimate
```

### 2. Run locally

Simply open `index.html` in your browser. No server or build step required.

---

## 🎮 How It Works

```
User visits site
  ↓
Auth wall (Sign in with pre-configured accounts)
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

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | Vanilla HTML/CSS/JS — Three.js for 3D |
| Auth | Local Storage based persistent system |
| Hosting | Vercel (Static) |

---

## 📁 Project Structure

```
shivanimate/
├── index.html       ← Entire app (auth + animate + dashboard)
├── portfolio.html   ← Personal portfolio of Shivteg
├── README.md
└── vercel.json      ← Static routing config
```

---

## 🔧 Customization

- **Add more styles**: Extend `STYLE_COLORS`, add a chip, and add a case in `applyLetterEffect`
- **Change colors**: Edit `STYLE_COLORS` and `RAINBOW` in JS
- **Export Data**: Use the "Export Permanent Record" button in the Admin Dashboard to save user data.

---

## 📜 License

MIT — free to use, remix, and deploy.

---

Built with ✦ by [Zero AI Technologies](https://github.com/Lottie128)
