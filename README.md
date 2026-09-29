# B. M. Shahria Alam — Personal Portfolio & Research Showcase

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-brightgreen?style=for-the-badge&logo=github)](https://shahriaalam.github.io/Portfolio/)
[![Google Scholar](https://img.shields.io/badge/Google_Scholar-23+_Publications-4285F4?style=for-the-badge&logo=googlescholar&logoColor=white)](https://scholar.google.com/citations?user=SKUlnPYAAAAJ&hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/b-m-shahria-alam-0aa425166/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Welcome to the official repository for the personal portfolio, scientific research index, and project showcase of **B. M. Shahria Alam** — Jr. AI Automation Engineer at SM Technology, Computer Science & Engineering graduate from East West University, and Researcher in Artificial Intelligence and Explainable AI (XAI).

---

## 🌐 Live Website

Access the live portfolio hosted on GitHub Pages:  
👉 **[https://shahriaalam.github.io/Portfolio/](https://shahriaalam.github.io/Portfolio/)**

---

## 📌 Overview

This web portfolio is engineered with a modern, responsive, dark-mode aesthetic. It highlights professional experience, technical services, interactive software projects, downloadable credentials, and an extensive peer-reviewed scientific publications catalog with citation metrics.

### 🌟 Key Highlights

- **Modular Section Architecture:** Core sections are decoupled into individual HTML files (`sections/*.html`) and dynamically loaded via asynchronous JavaScript fetch, keeping the codebase organized and maintainable.
- **Dynamic Hero Section:** Engaging headline rotator featuring typewriter transitions, social connectors, and instant skill indicators.
- **Scientific Publications Hub:** Categorized showcase of **23+ publications** and **84+ citations** with real-time tab filtering (Journals, Conferences, Preprints) and integrated Google Scholar links.
- **Interactive Portfolio & Case Studies:** Project cards with image previews, category tags, and modal dialogs detailing architecture, challenges, and outcomes.
- **Curriculum Vitae Download:** Direct one-click access to the official PDF resume (`assets/cv/B_M_Shahria_Alam_CV.pdf`).
- **Interactive Contact & Social Matrix:** Built-in contact channels, direct email link, and social profiles across GitHub, LinkedIn, Facebook, and Instagram.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technologies / Libraries |
| :--- | :--- |
| **Frontend Core** | HTML5, CSS3, JavaScript (ES6+) |
| **Component Architecture** | Dynamic asynchronous section loader (`fetch` API) |
| **Layout & Grid** | Bootstrap 4.x / 5.x Grid & Responsive Utilities |
| **Icons & Visuals** | [Feather Icons](https://feathericons.com/), Custom Vector Badges |
| **Animations & Effects** | [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/), Slick Slider, Particles.js, Headline Clip Text Type |
| **Hosting & Deployment** | GitHub Pages |

---

## 📁 Project Structure

```plaintext
Portfolio/
├── index.html                  # Main layout shell and asynchronous section loader
├── README.md                   # Repository documentation
├── css/
│   └── style.css               # Core custom portfolio styles and theme overrides
├── sections/                   # Modular HTML section components
│   ├── header.html             # Top navigation bar and action buttons
│   ├── mobile-menu.html        # Responsive side-drawer navigation
│   ├── intro.html              # Intro/hero banner with dynamic headline & social links
│   ├── features.html           # Service cards ("What I Do")
│   ├── portfolio.html          # Project showcase gallery
│   ├── resume.html             # Education, experience, and skill matrix
│   ├── publications.html       # Peer-reviewed papers & Google Scholar stats
│   ├── contact.html            # Contact form and touchpoints
│   ├── footer.html             # Footer navigation, copyright, and CV download CTA
│   ├── modals.html             # Interactive project detail modals
│   └── back-to-top.html        # Floating back-to-top scroll trigger
└── assets/
    ├── css/                    # Vendor stylesheets (Bootstrap, AOS, Slick, etc.)
    ├── js/                     # Vendor and core script files (jQuery, Slick, AOS, Feather)
    ├── cv/                     # Resume files (PDF format)
    └── images/                 # Portfolio imagery, logos, project thumbnails, and banners
```

---

## 💻 Local Development Setup

Because the application utilizes standard JavaScript `fetch()` calls to load the modular files inside `sections/`, running the page over an HTTP/HTTPS protocol is required (opening `index.html` directly via `file:///` may be blocked by browser CORS security policies).

### 1. Clone the Repository
```bash
git clone https://github.com/shahriaalam/Portfolio.git
cd Portfolio
```

### 2. Start a Local Development Server

Run any lightweight HTTP server in the root directory:

**Using Python (Recommended):**
```bash
# Python 3
python -m http.server 8000
```
Then visit: `http://localhost:8000`

**Using Node.js (via `npx serve` or `http-server`):**
```bash
npx serve .
# or
npx http-server -p 8000
```

**Using VS Code:**
- Install the **Live Server** extension.
- Right-click `index.html` and select **"Open with Live Server"**.

---

## 🔬 Research & Publications

Research interests span across:
- **Artificial Intelligence & Machine Learning**
- **Explainable Artificial Intelligence (XAI)**
- **Intelligent Automation & Agentic AI**
- **Computer Vision & Healthcare Diagnostics**

View my updated citation record and paper preprints on [Google Scholar](https://scholar.google.com/citations?user=SKUlnPYAAAAJ&hl=en).

---

## 📬 Contact & Connect

- **Email:** [contactalve@gmail.com](mailto:contactalve@gmail.com)
- **LinkedIn:** [linkedin.com/in/b-m-shahria-alam-0aa425166](https://www.linkedin.com/in/b-m-shahria-alam-0aa425166/)
- **GitHub:** [github.com/shahriaalam](https://github.com/shahriaalam)
- **Facebook:** [facebook.com/shahria.alam.107](https://www.facebook.com/shahria.alam.107/)
- **Instagram:** [instagram.com/shahria_alam](https://www.instagram.com/shahria_alam/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
