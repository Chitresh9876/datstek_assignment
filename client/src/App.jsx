import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection';

function App() {

  return (
    <>
      <NavigationBar />
    <div className='m-5'>
      <HeroSection/>
      </div>
      </>
  )
}

export default App
