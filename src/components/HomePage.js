import React from 'react'

function HomePage() {
  return (
    <>
        <div className='h-12 w-screen bg-slate-900 text-white flex items-center justify-around '>
            <div  className='flex space-x-5'>
                <p>FAQS</p>
                <p>SITEMAP</p>
            </div>
            <h2> CALL ME : <span className='text-yellow-300 ml-2'> 0742166832 </span></h2>

        </div>
        <div className='bg-gray-800 text-white h-32 w-screen  flex items-center justify-around '>
            <div>
                <h1 className='text-5xl font-bold  '> SAM <span className='text-yellow-300'>NJOMO</span></h1>
                <p className='tracking-widest text-slate-900'>PERSONAL TRAINER</p>

            </div>
            <div>
                <ul className='text-lg text-bold flex space-x-6'>
                    <li >HOME</li>
                    <li>ABOUT ME</li>
                    <li>PROGRAMS</li>
                    <li>BLOGS</li>
                    <li>CONTACT</li>
                </ul>
            </div>

        </div>
        <div className=' relative h-[47rem] w-screen bg-[url("https://images.pexels.com/photos/8874550/pexels-photo-8874550.jpeg?auto=compress&cs=tinysrgb&w=1600")] bg-cover  bg-right'>
            <div className=' w-[30rem] text-white absolute top-52 right-14 '>
                <h1 className='text-6xl tracking-wider font-black'><span className='text-yellow-300 font-light'>TRANSFORM </span>YOUR LIFE...</h1>
                <p className='leading-7 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                       in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                       nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                       sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                       <button className='bg-blue-700 hover:bg-blue-900 py-4 px-8 mt-6 rounded-xl '>READ MORE </button>
            </div>

        </div>
    </>
  )
}

export default HomePage;