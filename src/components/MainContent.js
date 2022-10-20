import React from 'react'

function MainContent() {
  return (
    <div className=' w-9/12 mt-2 mx-auto grid grid-cols-2 gap-4 '>
        <div className='bg-red-500 h-96'>
            <h2>News Update ///</h2>
            <div className='space-y-1 '>
                <div className='bg-white  flex  space-x-5 p-4 '>
                    <img className='h-36 w-64 border-2 border-red-400' src='https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    <div>
                        <h2>LOREM IPSUM</h2>
                        <h3>july 24</h3>
                        <p> lorem ipsum am am here learning react</p>
                    </div>
                </div>
                <div className='bg-white  flex space-x-5 p-4 '>
                    <img className='h-36 w-64 border-2 border-red-400' src='https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    <div>
                        <h2> LOREM IPSUM</h2>
                        <h3>july 24</h3>
                        <p> lorem ipsum am am here learning react</p>
                    </div>
                </div>
                <div className='bg-white  flex  space-x-5 p-4 '>
                    <img className='h-36 w-64 border-2 border-red-400' src='https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    <div>
                        <h2> LOREM IPSUM</h2>
                        <h3>july 24</h3>
                        <p> lorem ipsum am am here learning react</p>
                    </div>
                </div>
            </div>
            
            <button>VIEW ALL NEWS</button>
        </div>
        <div className='bg-white'>Categories</div>
    </div>
  ) 
}

export default MainContent;