import React from 'react';
import Stack from 'react-bootstrap/esm/Stack';
import Defalut from '../assets/Defalut.jpg';


const BenifitSection = () => {
    return (
      <div className="mb-5">
    <Stack direction='horizontal' gap={2} className="mb-5">
          <div className='fw-bold fs-2 ps-5' style={{width:"40%"}}>
              Benifits
          </div>
          <div className="ms-auto" style={{ width: "40%"}}>
              Save time, money, and ensure legal compliance with MiCounsel. Our platform allows you to create legal documents and contracts online in minutes. Say goodbye to lengthy paperwork and expensive legal fees. Experience the convenience and efficiency of MiCounsel today
          </div>
            </Stack>
            <img src={Defalut} class="img-thumbnail rounded-0 ms-5 me-2" style={{ width: "96%", height: "40rem"}} alt="..."></img>
        </div>
        
  )
}

export default BenifitSection
