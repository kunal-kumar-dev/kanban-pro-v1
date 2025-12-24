# 🚀 Kanban Pro v1

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A clean, modular **Kanban Board application** built using **Vanilla HTML, CSS, and JavaScript**, focused on real-world frontend fundamentals like state management, drag-and-drop logic, and maintainable code structure.

**Author:** **Kunal Kumar**

LIVE:- https://kunal-kumar-rajak-kanban-pro-v1.netlify.app/

---

## ✨ Features

- 📌 Trello-style Kanban board  
- 🔄 Drag & drop tasks with **reordering inside columns**  
- 🧠 Data-driven UI (single source of truth in JS state)  
- 💾 Persistent storage using `localStorage`  
- 🌓 Dark / Light theme toggle  
- 🔍 Real-time task search/filter  
- ⚡ Task priorities (Low / Medium / High)  
- 🧾 Export & Import board data as JSON  
- 🧩 Clean, modular file structure (HTML / CSS / JS separated)

---

## 🛠 Tech Stack

- **HTML5** – semantic markup  
- **CSS3** – Flexbox, CSS variables, theming  
- **JavaScript (Vanilla)**  
  - DOM manipulation  
  - Drag & Drop API  
  - State management  
  - LocalStorage persistence  

> No frameworks. No libraries. Just strong fundamentals.

---

## 🧠 Architecture Overview

- **State-first approach**  
  - All data (columns & tasks) stored in a central JS state object
- **Render-based UI**  
  - UI is generated from state for consistency
- **Drag & Drop engine**
  - ID-based drag tracking  
  - Drop position calculated using element geometry
- **Persistence**
  - State auto-saved after every change using `localStorage`

---

## 📁 Project Structure

```
kanban-pro-v3/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── state.js
│   ├── drag.js
│   ├── ui.js
│   └── app.js
└── README.md
```

---

## ▶️ How to Run Locally

1. Clone the repository:
   ```bash
   https://github.com/Kunal-Kumar-Rajak/kanban-pro-v1.git
   ```
2. Open `index.html` in your browser  
   *(No server or build tools required)*

---

## 📌 Why This Project Matters

This project demonstrates:
- Strong understanding of JavaScript fundamentals
- Real drag-and-drop logic (not tutorial shortcuts)
- Clean separation of concerns
- Professional frontend project structure

---

## 🚫 What This Project Is NOT

- ❌ No backend or authentication  
- ❌ No real security enforcement  
- ❌ No frameworks or bundlers  

This is a **client-side frontend project**, intentionally kept simple and transparent.

---

## 👤 About the Developer

**Kunal Kumar**  
Computer Science & Engineering Student  
Frontend & Web Development Enthusiast

- 🔗 GitHub: https://github.com/Kunal-Kumar-Rajak  
- 🔗 LinkedIn: https://linkedin.com/in/kunal-kumar-rajak  
- 🌐 Portfolio: https://kunal-kumar-rajak-portfolio.netlify.app/

---

## 📜 License

© 2025 Kunal Kumar. Released under the MIT License.
