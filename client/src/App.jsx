import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection';
import BenifitSection from './components/BenifitSection';
import Image3 from './components/Image3';
import PricingSection from './components/PricingSection';
import Image5 from './components/Image5';
import QuestionSection from './components/QuestionSection';
import ReviewSection from './components/ReviewSection';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <NavigationBar />
    <div className='m-5 mb-2 p-5 pb-1'>
        <HeroSection />
        <BenifitSection />
        <Image3 />
        <PricingSection />
        <Image5 />
        <QuestionSection />
        <ReviewSection />
        <Contact/>
      </div>
      </>
  )
}

export default App
