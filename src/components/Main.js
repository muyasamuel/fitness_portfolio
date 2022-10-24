import React from 'react'


function Main() {
  return (
    <div className=' p-10 h-auto md:h-96 max-w-full bg-slate-100'>
        <div className='flex flex-col md:flex-row items-center justify-center space-x-10 space-y-6 w-full  '>
            
        <div className='w-96 h-60 bg-white shadow-2xl rounded-lg p-5'>
            <h1 className='text-sm md:text-1xl lg:text-2xl uppercase '>Getting <br/><span className='font-extrabold ml-3 '>Started</span></h1>
            <p className=' text-sm md:text-1xl lg:text-1xl mt-4  md:leading-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
        </div>
        <div className='w-96 h-60 bg-white shadow-2xl rounded-lg p-5'>
            <h1 className='text-sm md:text-1xl lg:text-2xl uppercase'>Beginner  <br/><span className='font-extrabold ml-3 '>Programs</span></h1>
            <p className='text-sm md:text-1xl lg:text-1xl mt-4  md:leading-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
        </div>
        <div className='w-96 h-60 bg-white shadow-2xl rounded-lg p-5'>
            <h1 className='text-sm md:text-1xl lg:text-2xl uppercase '>Mass Gain <br/><span className='font-extrabold ml-3 '>Programs</span></h1>
            <p className='text-sm md:text-1xl lg:text-1xl mt-4  md:leading-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
        </div>
      
            
        </div>
        
        
    </div>
  )
}

export default Main;