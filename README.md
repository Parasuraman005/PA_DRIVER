
# 🎬 PA PLAYER

**PA PLAYER** is a lightweight, Netflix-style web video player that displays **Google Drive videos as interactive cards** with fullscreen playback, animated backgrounds, and a premium UI experience.

It works **without Google Drive API**, uses **Drive preview & thumbnails**, and is fully **responsive for mobile and desktop**.

---

## ✨ Features

- 🎥 Play Google Drive videos (MP4, WebM, etc.)
- 🖼 Auto video preview images from Google Drive
- ▶️ Fullscreen video playback
- 🎬 Netflix-style **PA intro screen**
- 🎨 Animated gradient background + particles
- 🖱 Smooth hover animations and transitions
- 📱 Mobile & desktop responsive
- 🚫 No API key required

---

## 📂 Project Structure

```
pa-player/
 ├── index.html     # Main HTML structure
 ├── style.css      # UI, animations, background
 ├── script.js      # Video logic, Drive link handling
 └── README.md      # Documentation
```

---

## 🚀 How It Works

PA PLAYER uses **Google Drive’s official preview system** instead of direct streaming.

- Video playback:
```
https://drive.google.com/file/d/FILE_ID/preview
```

- Preview image:
```
https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000
```

This avoids CORS issues and works on all devices.

---

## 🔧 How to Add or Replace Videos

### Step 1: Get Google Drive Link
1. Right-click video in Google Drive
2. Click **Get link**
3. Set permission:
```
Anyone with the link → Viewer
```
4. Copy the full link

Example:
```
https://drive.google.com/file/d/1MKcxevLV9Ai1MvZjI64G8nqvPCoElY4g/view
```

---

### Step 2: Open `script.js`

Find:
```js
const videos = [
  {
    title: "PA PLAYER Video 1",
    link: "https://drive.google.com/file/d/XXXXXXXX/view"
  }
];
```

---

### Step 3: Replace With Your Videos

```js
const videos = [
  {
    title: "My Movie",
    link: "https://drive.google.com/file/d/FILE_ID_1/view"
  },
  {
    title: "Tutorial",
    link: "https://drive.google.com/file/d/FILE_ID_2/view"
  }
];
```

No API key needed.

---

## 🖼 Preview Images

- Preview images load automatically from Google Drive
- No manual image upload needed
- Uses lazy loading for performance

If preview doesn’t load:
- Check sharing permission
- Ensure file is a video
- Verify link format

---

## 🎨 Customization

### Change Intro Text
`index.html`
```html
<div class="logo">PA</div>
```

### Change Header / Footer
```html
<header>PA PLAYER</header>
<footer>BUILD BY PA SOFTWARES - PARASURAMAN</footer>
```

### Change Colors
`style.css`
```css
#6366f1  /* Accent */
#0b0f1a  /* Background */
```

---

## 📱 Mobile Support

- Touch-friendly cards
- Fullscreen playback
- Optimized background effects
- Responsive layout

---

## 🌐 Deployment

You can deploy on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

Upload:
```
index.html
style.css
script.js
README.md
```

---

## 🔐 Privacy

- Videos remain in your Google Drive
- Access controlled by Drive permissions
- No third-party APIs
- No tracking

---

## 👨‍💻 Author

**PA SOFTWARES**  
Created by **Parasuraman**
