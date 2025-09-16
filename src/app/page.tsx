'use client';
import React from 'react';
import './globals.css';  
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import MovingTextAnimation from '@/components/Movingtext';

import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      
      <Nav />
      <Hero />
      <FeatureSection />
     <MovingTextAnimation />
      <TeamSection />
      <Footer />  

    </div>
  );
}
