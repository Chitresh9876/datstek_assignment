import React from 'react'
import Feedback from './Feedback'
import Stack from 'react-bootstrap/esm/Stack'


const ReviewSection = () => {
  return (
    <div className="m-5">
      <div className="mb-5">
        <h1 className="fw-bold mb-3">Satisfied Customers</h1>
        <p>Read what are customer have to say about Micoursel</p>
      </div>
      <Stack gap={5} direction="horizontal" className="justify-content-between">
        <Feedback
          feedback="MiCoursel is an incredible platform that has made creating legal documents a breze."
          name="John Doe"
          companyName="CEO, ABC Company"
        />
        <Feedback
          feedback="I highly recommend MiCounsel for all your legal needs. It's fast, efficient, and user-friendly."
          name="Jane Smith"
          companyName="Legal Consultant, XYZ Firm"
        />
      </Stack>
    </div>
  );
}

export default ReviewSection
