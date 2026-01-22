import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CyberAchievements from './components/CyberAchievements';
import Certifications from './components/Certifications';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App bg-black min-h-screen">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <CyberAchievements />
            <Certifications />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
