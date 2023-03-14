import React from 'react'
import CV from '../../assets/TomasSaltoCV2023.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV}download className='btn'>Download CV</a>
        <a href='#contact' className='btn'>Les's Talk</a>
    </div>
  )
}

export default CTA