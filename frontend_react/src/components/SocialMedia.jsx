import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export const SocialMedia = () => {
  return (
    <div className='app__social' style={{ marginBottom: '2rem' }}>
      <div>
        <a href='https://www.linkedin.com/in/wolffenbuttelm' target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://github.com/MartijnW2/PortfolioMPW' target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia