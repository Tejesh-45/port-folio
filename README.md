# Jakkula Tejesh — Portfolio

Premium recruiter-focused portfolio built with React + Framer Motion.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open in browser
# http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
```
Then deploy the `/build` folder to **Netlify**, **Vercel**, or **GitHub Pages**.

### Deploy to Netlify (easiest)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"
3. Drag and drop the `/build` folder → Done ✅

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🗂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Achievements.jsx
│   ├── Certifications.jsx
│   ├── CodingProfiles.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data.js          ← All resume data in one place
├── App.js
├── index.js
└── index.css
public/
└── profile_pic.jpeg
```

## ✏️ Updating Content

All content lives in **`src/data.js`** — edit that file to update any text, links, or stats. No need to touch any component files.

## Tech Stack

- React 18
- Framer Motion (animations)
- React Icons
- Space Grotesk + JetBrains Mono (Google Fonts)
