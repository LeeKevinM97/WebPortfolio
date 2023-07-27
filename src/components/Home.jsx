import React from 'react'

function Home() {
  return (
    <>
        <div className='bg-first w-full h-fit flex justify-around'>
          <div className='w-1/2 h-[48rem] flex-auto'>
            <div className='text-center py-60'>
              <p className='text-fourth font-bold text-4xl my-10'>
                Hello, my name is Kevin Maximiliano Lee.
              </p>
              <p className='text-fourth text-2xl'>
                I am a Data Engineer / Full-Stack Developer!
              </p>
            </div>
          </div>
          <div className='w-1/2 h-[48rem] flex-auto'>
            <p>
              Image goes here
            </p>
          </div>
        </div>
    </>
  )
}

export default Home