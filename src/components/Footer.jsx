import React from 'react'
import Border from '../components/Border.jsx'

function Footer() {
  return (
    <>
    <Border/>
    <div className="bg-first h-fit w-full">
      <h1 className="text-4xl text-center font-semibold mb-6 text-fourth roboto">Follow Me!</h1>
      <div className='justify-center'>
        <i class="fa-brands fa-linkedin fa-beat"></i>
      </div>
    </div>
      
    </>
  )
}

export default Footer