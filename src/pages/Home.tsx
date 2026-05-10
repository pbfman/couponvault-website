import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Gamification from '../components/Gamification';
import AboutDeveloper from '../components/AboutDeveloper';
import Download from '../components/Download';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Gamification />
        <AboutDeveloper />
        <Download />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
