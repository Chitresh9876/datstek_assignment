import React from 'react'
import Stack from 'react-bootstrap/esm/Stack'

const Faq = ({question, answer}) => {
  return (
    <div className='border-top border-bottom border-black pt-4 pb-4'>
          <Stack direction='horizontal' className='justify-content-between mb-2'>
              <h5 className='fw-bold'>{question}</h5>
              <span>V</span>
          </Stack>
          <p>{answer}</p>
    </div>
  )
}

export default Faq
