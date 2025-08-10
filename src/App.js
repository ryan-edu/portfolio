import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ScrollToTopButton from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy load components that are below the fold
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dark-orange"></div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;
