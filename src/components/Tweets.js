import React from 'react'
import { FaTwitter } from 'react-icons/fa';

function Tweets() {
  return (
    <div className='h-24 bg-gray-700 w-screen overflow-hidden flex items-center justify-around '>
        <div className='flex items-center space-x-4 ' >
          <div className='bg-gray-600  p-3 rounded-full'>
             <FaTwitter className='h-11 w-12 '  />

          </div>
            
             <p>Loading tweets...</p>
        </div>
         
        
        <button className='bg-red-500 hover:bg-red-700 py-2 px-8 mt-6 rounded-xl '>FOLLOW ME</button>
    </div>
  )
}

export default Tweets;