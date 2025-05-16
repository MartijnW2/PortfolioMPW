import React from 'react'
import {BsLinkedIn, BsGithub} from 'react-icons/bs'

export const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedIn/>
        </div>
            <div>
            <BsGitHub/>
        </div>
    </div>
  )
}

export default SocialMedia