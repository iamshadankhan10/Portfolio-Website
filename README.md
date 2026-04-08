# 🖥️ macOS Portfolio — Shadan Raza Khan

A interactive macOS-inspired portfolio website built with React + Vite. It mimics the macOS desktop experience with draggable windows, a dock, wallpaper changer, and more.

🔗 **Live Demo:** [shadanraza.onrender.com](https://shadanraza.onrender.com)

---

## ✨ Features

- 🪟 **Draggable & Resizable Windows** — powered by `react-rnd`
- 🔴🟡🟢 **macOS-style Window Controls** — close, minimize, maximize
- 🚀 **Dock with Magnification** — smooth hover animations
- 🖼️ **Wallpaper Changer** — right click on desktop to change wallpaper
- 🕐 **Analog Clock Widget** — draggable live clock on desktop
- 💻 **Interactive Terminal** — run commands like `about`, `projects`, `skills`, `socials`
- 📁 **GitHub Projects Window** — showcases projects with tags and links
- 🎵 **Spotify Window** — music section
- 📄 **Resume Window** — PDF viewer
- 📝 **Notes Window** — notes section
- 🌐 **Navbar** with live date & time

---

## 🛠️ Tech Stack

- **React** — UI framework
- **Vite** — build tool
- **SCSS** — styling
- **react-rnd** — draggable & resizable windows
- **react-console-emulator** — terminal emulator

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/iamshadankhan10/Portfolio-Website.git
cd Portfolio-Website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 📂 Project Structure

src/
├── components/
│   ├── windows/
│   │   ├── Github.jsx
│   │   ├── Note.jsx
│   │   ├── Resume.jsx
│   │   ├── Spotify.jsx
│   │   ├── Cli.jsx
│   │   └── ClockWidget.jsx
│   ├── MacWindow.jsx
│   ├── Dock.jsx
│   ├── Nav.jsx
│   ├── DateTime.jsx
│   └── ContextMenu.jsx
├── assets/
│   └── github.json
├── App.jsx
└── main.jsx

---

## 📸 Preview

![Portfolio Preview](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80)

---

## 👨‍💻 Author

**Shadan Raza Khan**
- 🌐 [shadanraza.onrender.com](https://shadanraza.onrender.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/shadankhan10)
- 🐙 [GitHub](https://github.com/iamshadankhan10)
- 📧 iamshadankhan10@gmail.com

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
