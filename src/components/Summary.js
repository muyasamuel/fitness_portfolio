import React from 'react'

function Footer() {
  return ( 
    <div className='h-[22rem] w-screen bg-gray-700 flex items-start  justify-center space-x-5  '>
        <div className=' w-80 mt-10'>
        <h1 className='font-extrabold uppercase tracking-widest'>About me  <span className='text-red-500'> \\\ </span></h1>
            <p className='mt-5'>loremnsnn sjsks smskks skskkk khe ekeke  eiekek eekke eadhj
                hjejeje dkdd  eeike  ekdeke ekekke e jekff  rhhrj ejje  ehjjww 
                fgh kdjd
            </p>
        </div>
        <div className='w-72 mt-10 '>
        <h1 className='font-extrabold uppercase tracking-widest'>NAVIGATION  <span className='text-red-500'> \\\ </span></h1>
            <ul className='mt-5 space-y-3 divide-y divide-amber-400'>
                <li>Testimonials</li>
                <li>About me </li>
                <li>Programs</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='w-72 mt-10  '>
        <h1 className='font-extrabold uppercase tracking-widest'>Archives  <span className='text-red-500'> \\\ </span></h1>
            <ul className='mt-5 space-y-3  divide-y  divide-amber-400'>
                <li>July 2015</li>
                <li>may 2017</li>
                <li>august 2019</li>
                <li>june 2021</li>
                <li>February 2022</li>
            </ul>
            
        </div>
        <div className='w-80 mt-10 '>
        <h1 className='font-extrabold uppercase tracking-widest'>latest comments <span className='text-red-500'> \\\ </span></h1>
            <div className='my-4'>
                <div className='flex space-x-3 items-center my-2'>
                    <img className='h-12 w-12'  src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
                    <div>
                        <p className='text-amber-400'>Cherish</p>
                        <p className='text-sm text-slate-200'>2022-07-23</p>
                    </div>
                    
                </div>
                <p className='text-sm '>kdkkirdg ggyhe tyeyey egyeheh egryr ryeur rurii tirkruyt rtrgrgr...</p>
            </div>
            <div>
                <div className='flex space-x-3 items-center my-2'>
                    <img   className='h-12 w-12' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
                    <div>
                        <p className='text-amber-400'>Sammy</p>
                        <p className='text-sm text-slate-200'>2022-07-23</p>
                    </div>
                    
                </div>
                <p className='text-sm'>kdkkirdg ggyhe tyeyey egyeheh egryr ryeur rurii tirkruyt rtrgrgr...</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;