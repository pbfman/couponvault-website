import React from 'react';
import Navbar from '../components/Navbar';
import DevelopmentBanner from '../components/DevelopmentBanner';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Gamification from '../components/Gamification';
import AboutDeveloper from '../components/AboutDeveloper';
import Download from '../components/Download';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <DevelopmentBanner />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Gamification />
        <AboutDeveloper />
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
