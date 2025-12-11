import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar';
import HeroSection from './components/Sections/HeroSection';
import SkillsSection from './components/Sections/SkillsSection';
import ProjectSection from './components/Sections/ProjectSection';
import AboutSection from './components/Sections/AboutSection';
import ErrorBoundary from './components/ErrorBoundary';
import ContactSection from './components/Sections/ContactSection';
import Footer from './components/Sections/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div>
          <Navbar />
          <HeroSection />
          <SkillsSection />
          <ProjectSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App