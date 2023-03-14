import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/tomas-agustin-salto-2585b6170' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/tomassalto' target="_blank" rel="noopener noreferrer"><FaGithub/></a>        
    </div>
  )
}

export default HeaderSocials