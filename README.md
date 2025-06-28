# 🚀 User Profile Dashboard UI

This project is a **responsive, modern frontend dashboard**.  
It features a modular React + Vite architecture, stylish UI with Tailwind CSS, and clean component-driven design.

---

## 📚 Table of Contents

- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Folder Structure](#-folder-structure)
- [Screenshots](#-screenshots)
- [How to Run Locally](#-how-to-run-locally)
- [Key Components](#-key-components)
- [License](#-license)

---

## 🛠 Tech Stack

| Tool / Library      | Purpose                                   |
|----------------------|------------------------------------------|
| **React.js**          | Component-based UI                      |
| **Vite**              | Super-fast build tool / dev server      |
| **Tailwind CSS**      | Utility-first responsive styling       |
| **JavaScript (ES6+)** | App logic & state management           |
| **JSON**              | Static mock data for user & tasks      |

---

## ✨ Features

✅ Modern dashboard layout with:

- **Profile card**: shows user avatar, name, email, editable with modal form.  
- **Task list**: toggle completion with interactive checkbox styling.  
- **Statistics**: circular progress indicator and completion percentage.

✅ Fully **responsive** design across mobile, tablet, desktop.

✅ **Loading state animation** on startup.

✅ Uses **Tailwind transitions** for hover, scale, shadow animations.

✅ Clean code with separate components, easily maintainable.

---

## 📁 Folder Structure

src/
├── components/ \n
│ ├── Profile.jsx
│ ├── EditProfileForm.jsx
│ ├── Tasks.jsx
│ ├── Statistics.jsx
│ └── icons.jsx
├── data/
│ └── mockData.json
├── pages/
│ └── Dashboard.jsx
├── App.jsx
└── main.jsx


---

## 🖼 Screenshots

| Desktop Layout              | Mobile Layout               |
|-----------------------------|-----------------------------|
| !![image](https://github.com/user-attachments/assets/a8a61839-4fc8-47ab-917a-9552808a6062)
 | ![mobile screenshot](![![image](https://github.com/user-attachments/assets/ddbbc025-2fc6-4bb3-8be6-167b646b31dc)
]()
) |


---

## 🚀 How to Run Locally

```bash
# 1️⃣ Clone the repository or download the code
cd floww-dashboard

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the dev server
npm run dev

# ➡ Open your browser at http://localhost:5173
🧠 Key Components
Component	Role
Profile.jsx	Displays profile info with fallback avatar, edit button
EditProfileForm.jsx	Modal form to update user name, email, profile pic
Tasks.jsx	Shows today's tasks, toggle completion on click
Statistics.jsx	Circular progress indicating task completion
icons.jsx	Centralized SVG icons (Edit, Check)
mockData.json	Holds static user & tasks data
Dashboard.jsx	Assembles profile, tasks, stats; handles state

📜 License
This project is purely for demonstration and internship assignment purposes.

✅ Built with ❤️ by Ayush Kumar

---

# 🔥 Done!

If you’d like, I can also:
✅ add **actual screenshots** from your running app,  
✅ prepare a **zip file** with everything bundled,  
✅ or set up a quick **deployment to Netlify/Vercel** so you can share a live link.

Just say the word! 🚀
