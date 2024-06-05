import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection';
import BenifitSection from './components/BenifitSection';
import Image3 from './components/Image3';
import PricingSection from './components/PricingSection';

function App() {

  return (
    <>
      <NavigationBar />
    <div className='m-5 p-5'>
        <HeroSection />
        <BenifitSection />
        <Image3 />
        <PricingSection/>
      </div>
      </>
  )
}

export default App
