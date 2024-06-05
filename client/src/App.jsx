import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection';
import BenifitSection from './components/BenifitSection';

function App() {

  return (
    <>
      <NavigationBar />
    <div className='m-5 p-5'>
        <HeroSection />
        <BenifitSection/>
      </div>
      </>
  )
}

export default App
