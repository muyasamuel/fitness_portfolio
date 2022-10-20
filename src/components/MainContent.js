import React from 'react'
import { IoIosArrowDropright } from "react-icons/io"
import { FaQuoteLeft } from 'react-icons/fa';
import { CiClock1 } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";


function MainContent() {
  return (
    <div className=' bg-black w-screen h-screen   '>
        <div className='w-4/5 mx-auto grid grid-cols-2 gap-4'>
        <div className=' h-96 text-white border-r-2  '>
            <h2 className='font-extrabold uppercase tracking-widest' >News Update <span className='text-blue-500'> \\\ </span></h2>
            <div className='space-y-1 '>
                <div className='  flex  space-x-5 p-4  '>
                    <img className='h-36 w-64 border-2 border-red-400' src='https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
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
                <div className=' flex space-x-5 p-4 '>
                    <img className='h-36 w-64 border-2 border-red-400' src='https://images.pexels.com/photos/3837293/pexels-photo-3837293.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
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
                <div className='  flex  space-x-5 p-4 '>
                    <img className='h-36 w-64 border-2 border-red-400' src='https://images.pexels.com/photos/4047003/pexels-photo-4047003.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
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
            
            <button className='bg-blue-700 hover:bg-blue-900 py-3 px-8 mt-9 rounded-xl '>VIEW ALL NEWS</button>
        </div>
        <div className='text-white h-96 space-y-14 ml-5'>
            <div>
                <h1 className='font-extrabold uppercase tracking-widest'>Categories  <span className='text-blue-500'> \\\ </span></h1>
                <div className='mt-6 leading-9'>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> sammymuya</div>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> sammymuya</div>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> sammymuya</div>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> sammymuya</div>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> sammymuya</div>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> sammymuya</div>
                    <div className='flex items-center '><IoIosArrowDropright className='mr-3 h-6 w-6 text-amber-400'/> sammymuya</div>
                   
                </div>
            </div>
            <div className='mt-8'>
                <h1 className='font-extrabold uppercase tracking-widest'>Testimonials  <span className='text-blue-500'> \\\ </span></h1>
                 <p className='mt-4 tracking-wide '> <FaQuoteLeft className='h-12 w-6' />  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit 
                     esse cillum dolore eu fugiat nulla pariatur.....</p>

            </div>
            <button className='bg-blue-700 hover:bg-blue-900 py-2 px-8 mt-10  '>VIEW ALL NEWS</button>
        </div>
        
        </div>
        
    </div>
  ) 
}

export default MainContent;