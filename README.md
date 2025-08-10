# Muhammad Ibrahim - MERN Stack Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a MERN Stack Developer.

## 📋 About

It features a clean, modern design with smooth animations and a fully functional contact form.

## ✨ Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean design with smooth animations using AOS (Animate On Scroll)
- **Contact Form**: Functional contact form with EmailJS integration
- **Dynamic Content**: Typewriter effects and interactive elements
- **PWA Ready**: Progressive Web App capabilities with custom manifest
- **Fast Performance**: Optimized images and code splitting

## 🛠️ Technologies Used

### Frontend

- **React.js** (18.2.0) - JavaScript library for building user interfaces
- **Tailwind CSS** (3.3.3) - Utility-first CSS framework
- **React Icons** - Icon library for React
- **AOS** - Animate On Scroll library
- **React Simple Typewriter** - Typewriter animation effects
- **React Scroll** - Smooth scrolling navigation

### Backend Integration

- **EmailJS** - Contact form email service
- **React Toastify** - Toast notifications for user feedback

### Development Tools

- **Create React App** - React application setup
- **Babel** - JavaScript compiler
- **ESLint** - Code linting and formatting

## 🎨 Sections

1. **Hero/Profile** - Introduction with animated typewriter effect
2. **About** - Personal background and skills overview
3. **Skills** - Technical expertise with icons
4. **Projects** - Portfolio of completed projects
5. **Experience** - Professional work experience timeline
6. **Contact** - Functional contact form with social links

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
mysite/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── faviconn.ico
│   ├── faviconnn.png
│   └── project-images/
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── Profile.js
│   │   ├── Projects.js
│   │   ├── ScrollToTop.js
│   │   ├── Skills.js
│   │   ├── SocialHandles.js
│   │   └── Wave.js
│   ├── data/
│   │   ├── about.js
│   │   ├── contact.js
│   │   ├── experience.js
│   │   ├── navlinks.js
│   │   ├── profile.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── assets/
│   │   └── Images/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env
├── package.json
├── tailwind.config.js
└── README.md
```
