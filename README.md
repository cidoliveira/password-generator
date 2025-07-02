# Password Generator

A lightweight, responsive web app that instantly creates **random 16‑character passwords** made up of upper‑case letters, lower‑case letters, numbers and symbols—all in pure **HTML, CSS & vanilla JavaScript**.

Live demo → <https://password-generator-cidoliveira.vercel.app>

> **Heads‑up 🛡️** This project uses `Math.random()` for simplicity, which is **not** cryptographically secure. Do **not** rely on it for highly‑sensitive production use.

---

## ✨ Features

| Feature                  | Details                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **One‑click generation** | Press the “Generate passwords” button to instantly get two fresh passwords. The logic randomly selects characters from a 91‑item array of A‑Z, a‑z, 0‑9 and symbols citeturn4view0 |
| **Copy to clipboard**    | Click either password and it’s copied automatically; a small modal confirms success.                                                                                                  |
| **Responsive design**    | Works comfortably on desktop and mobile, with a simple dark‑green colour palette. citeturn5view0                                                                                   |
| **Zero dependencies**    | No frameworks, build tools or third‑party libraries—just open the `index.html` in any modern browser.                                                                                 |

---

## 🛠 Tech Stack

- **HTML5** for markup
- **CSS3** (including a small reset) for styling citeturn6view0
- **JavaScript (ES6)** to generate & copy passwords citeturn4view0

---

## 🚀 Quick Start

```bash
# 1 – Clone the repository
git clone https://github.com/cidoliveira/password-generator.git
cd password-generator

# 2 – Just open the page
# (no build step required)
open index.html   # macOS
# or
start index.html  # Windows
```

> **Tip**: You can also serve it locally with any static server (e.g. `npx serve .`) to avoid browser security warnings.

---

## 📂 Project Structure

```
├── index.html     # UI markup
├── script.js      # Generator & clipboard logic
├── styles.css     # Main styles & responsive rules
├── reset.css      # Minimal CSS reset
└── README.md      # Project information
```

---

## 🔧 Customisation

| What you want          | Where to change                                                       |
| ---------------------- | --------------------------------------------------------------------- |
| **Password length**    | Edit the `chooseCharacter(16)` call in `script.js` to another number. |
| **Allowed symbols**    | Tweak the `characters` array in `script.js`.                          |
| **Colours / fonts**    | Update CSS variables in `styles.css`.                                 |
| **Copy feedback text** | Adjust the `.modal` markup & styling in `index.html` / `styles.css`.  |

---

## 🤝 Contributing

1. **Fork** the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. **Commit** your changes: `git commit -m "feat: add awesome feature"`
4. **Push**: `git push origin feat/your-feature`
5. Open a **Pull Request**

---

## 📄 License

This project is released under the **MIT License**—see `LICENSE` for details.

---

Made with&nbsp;♥ by [Cid Oliveira](https://github.com/cidoliveira)
