import React from 'react'
import Border from '../components/Border.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
    <Border/>
    <div className="bg-first h-fit w-full">
      <h1 className="text-4xl text-center font-semibold mb-6 text-fourth roboto">Follow Me!</h1>
      <div className='flex justify-center pb-12'>
        <a href="https://www.linkedin.com/in/leekevinmaximiliano/" target="_blank" className="bg-second w-fit h-fit mx-4 p-2 rounded-xl hover:p-3">
          <FontAwesomeIcon icon={faLinkedin} className="text-white h-10 w-10"/>
        </a>
        <a href="https://github.com/leekevinm97/" target="_blank" className="bg-second w-fit h-fit mx-4 p-2 rounded-xl hover:p-3">
          <FontAwesomeIcon icon={faGithub} className="text-white h-10 w-10"/>
        </a>
      </div>
      <p className="roboto text-fourth text-center pb-4">
        © 2023 - Kevin M. Lee
      </p>
    </div>
    </>
  )
}

export default Footer