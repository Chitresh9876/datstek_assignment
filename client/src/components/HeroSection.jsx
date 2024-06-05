import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Defalut from '../assets/Defalut.jpg';


const HeroSection = () => {
  return (
    <Stack gap={1} direction="horizontal">
          <div className="p-5" style={{width:"40%"}}>
              <div className='fw-bolder fs-1'>Create Legal Documents & Contracts Online in Minutes</div>
              <div className=''>Welcome to MiCounsel, the platform that allows you to easily create legal documents and contracts online in just minutes. Say goodbye to the hassle of traditional paperwork and enjoy the convenience of our user-friendly interface</div>
              <div className="mt-4">
                  <button type="button" class="btn btn-dark rounded-0 me-4">Get Started</button>
                  <button type="button" class="btn btn-light border border-black rounded-0">Learn More</button>
              </div>
          </div>
          <div className="p-2 ms-auto" style={{ width: "40%"}}>
              <img src={Defalut} class="img-thumbnail rounded-0" alt="..."></img>
      </div>
    </Stack>
  )
}

export default HeroSection
