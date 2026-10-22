# Beingvin — Full Stack Web Developer & Designer Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-beingvin.com-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://beingvin.com)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

A modern, highly-interactive, responsive portfolio and client onboarding web application built for **Beingvin** — showcasing full-stack web development, UI/UX design, interactive client quote estimation, and project case studies.

---

## 🌟 Key Features

- **Fluid Animations & Micro-interactions:**
  - Smooth page transitions powered by **Framer Motion** (`AnimatePresence`).
  - Scroll and timeline animations using **GSAP** and **ScrollMagic**.
  - Interactive custom cursor tracker and real-time scroll progress indicator.
  - Animated preloader experience on initial load.

- **Interactive Client Estimator & Pricing:**
  - Multi-step interactive project inquiry wizard (`GetStarted`):
    - Choose service type, budget range, preferred timeline, and project specifications.
    - Automated lead capture saved directly to Firebase Firestore.
    - WhatsApp quick-chat integration with pre-filled enquiry parameters.

- **Dynamic Work & Portfolio Showcase:**
  - Filterable project grid with pagination.
  - Dedicated project detail view with image carousels, technology tags, and live preview links.

- **SEO & Social Optimization:**
  - Dynamic meta tags and Open Graph / Twitter Card support using **React Helmet**.
  - Structured data with **JSON-LD Schema Markup** (`SchemaManager`) for rich search engine results.
  - Search engine crawlers setup with `robots.txt` and `sitemap.xml`.

- **Compliance & Privacy:**
  - GDPR-friendly Cookie Consent banner.
  - Dedicated Privacy Policy documentation page.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) (Create React App) |
| **Routing** | [React Router v6](https://reactrouter.com/) |
| **Styling** | Sass (SCSS), CSS Modules, Vanilla CSS |
| **Animation & Motion** | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/), ScrollMagic |
| **Database & Cloud** | [Firebase Firestore](https://firebase.google.com/docs/firestore) |
| **SEO & Metadata** | React Helmet, JSON-LD Schema |
| **Icons & Media** | FontAwesome SVG Icons, React Multi Carousel |

---

## 📁 Project Directory Structure

```text
beingvin-app/
├── public/
│   ├── images/              # Favicons, project screenshots, and asset media
│   ├── index.html           # HTML entry point and external scripts (SMTP.js)
│   ├── robots.txt           # Crawler instructions
│   └── sitemap.xml          # Search engine site index
├── src/
│   ├── Components/
│   │   ├── config/          # Firebase and SMTP communication configs
│   │   ├── CookieConsent/   # User consent banner
│   │   ├── Cursor/          # Custom mouse cursor tracker
│   │   ├── Page/
│   │   │   ├── About/       # About profile, technical skills, and tools
│   │   │   ├── Home/        # Hero, Services, Work, and Contact sections
│   │   │   └── PrivacyPolicy/
│   │   ├── Preloader/       # Initial site loader
│   │   ├── ProgressBar/     # Reading/scroll progress bar
│   │   └── Seo/             # Helmet meta tags & Schema JSON-LD manager
│   ├── Pages/               # Route components (Home, Layout, AnimatePage, 404)
│   ├── css/                 # Global styles and app reset
│   ├── App.js               # Root application wrapper
│   └── index.js             # React DOM rendering entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (`v16.x` or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/beingvin/beingvin-app.git
cd beingvin-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables Configuration

Create a `.env.local` file in the root directory and configure your Firebase credentials:

```env
REACT_APP_API_KEY=your_firebase_api_key
REACT_APP_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_DATABASE_URL=https://your_project_id.firebaseio.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
REACT_APP_MEASUREMENT_ID=your_measurement_id
```

### 4. Run the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

The compiled output will be generated inside the `build/` directory, ready to be deployed to your preferred hosting provider (e.g., Hostinger, Vercel, Firebase Hosting, Netlify).

---

## 📄 License & Copyright

© 2024–Present **Beingvin**. All rights reserved.  
Unauthorized duplication or commercial distribution of this project's code, branding, and design assets without prior written consent is strictly prohibited. For inquiries, reach out via [beingvin.com](https://beingvin.com) or `support@beingvin.com`.
