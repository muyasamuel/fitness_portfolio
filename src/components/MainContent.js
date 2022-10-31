import React from 'react'
import { IoIosArrowDropright } from "react-icons/io"
import { FaQuoteLeft } from 'react-icons/fa';
import { CiClock1 } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";


function MainContent() {
  return (
    <div className=' bg-black w-screen overflow-hidden  h-auto md:h-[42rem] lg:h-[52rem]    '>
      <div className='w-[78rem] mx-auto  grid grid-rows-2 py-12 px-10 my-4 space-y-28 md:grid-cols-2 gap-10   '>
        <div className=' h-96 text-white border-r-2 mt-10  '>
            <h2 className='font-extrabold uppercase tracking-widest' >News Update <span className='text-red-500'> \\\ </span></h2>
            <div className='space-y-3 mt-3'>
                <div className='  flex  space-x-5     '>
                    <img className='h-36 w-64 border-2 border-amber-400' src='https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    <div>
                        <h2 className='font-extrabold uppercase tracking-widest'>LOREM IPSUM</h2>
                        <div className='flex items-center space-x-2'>
                            <CiClock1 />
                            <h3>july 24,2023</h3>
                            <BiMessageDetail />
                            <p>0</p>
                        </div> 
                        <p> lorem ipsum am am here learning react</p>
                    </div>
                </div>
                <div className=' flex space-x-5  '>
                    <img className='h-36 w-64 border-2 border-amber-400' src='https://images.pexels.com/photos/3837293/pexels-photo-3837293.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    <div>
                        <h2 className='font-extrabold uppercase tracking-widest'> LOREM IPSUM</h2>
                        <div className='flex items-center space-x-2'>
                            <CiClock1 />
                            <h3>july 24,2023</h3>
                            <BiMessageDetail />
                            <p>0</p>

                        </div> 
                        <p> lorem ipsum am am here learning react</p>
                    </div>
                </div>
                <div className='  flex  space-x-5  '>
                    <img className='h-36 w-64 border-2 border-amber-400' src='https://images.pexels.com/photos/4047003/pexels-photo-4047003.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    <div>
                        <h2 className='font-extrabold uppercase tracking-widest'> LOREM IPSUM</h2>
                        <div className='flex items-center space-x-2'>
                            <CiClock1 />
                            <h3>july 24,2023</h3>
                            <BiMessageDetail />
                            <p>0</p>

                        </div> 
                        <p> lorem ipsum am am here learning react</p>
                    </div>
                </div>
            </div>
            
            <button  className='bg-red-500 hover:bg-red-700  py-2 px-8 mt-10 rounded-2xl  '>VIEW ALL NEWS</button>
        </div>
        <div className='text-white h-96 space-y-3 ml-5  '>
            <div>
                <h1 className='font-extrabold uppercase tracking-widest'>Categories  <span className='text-red-500'> \\\ </span></h1>
                <div className='mt-6 leading-9'>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> Lorem ipsum dolor sit amet</div>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> sed do eiusmod tempor incididunt ut</div>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> Ut enim ad minim veniam</div>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> squis nostrud exercitation </div>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> aboris nisi ut aliquip ex ea</div>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> Ut enim ad minim veniam</div>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> eu fugiat nulla pariatur</div>
                   
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='font-extrabold uppercase tracking-widest'>Testimonials  <span className='text-red-500'> \\\ </span></h1>
                 <p className='mt-4 tracking-wide '> <FaQuoteLeft className='h-12 w-6' />  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit 
                     esse cillum dolore eu fugiat nulla pariatur.....</p>

            </div>
            <button className='bg-red-500 hover:bg-red-700  py-2 px-8 mt-10 rounded-2xl  '>VIEW Testimonials</button>
        </div>
        
        </div>
        
    </div>
  ) 
}

export default MainContent;