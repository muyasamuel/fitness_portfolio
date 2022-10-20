import React from 'react'

function Footer() {
  return ( 
    <div className='h-[22rem] w-screen bg-slate-700 flex items-start  justify-center space-x-5 text-white '>
        <div className=' w-80 mt-10'>
        <h1 className='font-extrabold uppercase tracking-widest'>About me  <span className='text-blue-500'> \\\ </span></h1>
            <p className='mt-5'>loremnsnn sjsks smskks skskkk khe ekeke  eiekek eekke eadhj
                hjejeje dkdd  eeike  ekdeke ekekke e jekff  rhhrj ejje  ehjjww 
                fgh kdjd
            </p>
        </div>
        <div className='w-72 mt-10 '>
        <h1 className='font-extrabold uppercase tracking-widest'>NAVIGATION  <span className='text-blue-500'> \\\ </span></h1>
            <ul className='mt-5 space-y-3 divide-y divide-amber-400'>
                <li>Testimonials</li>
                <li>About me </li>
                <li>Programs</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='w-72 mt-10 '>
        <h1 className='font-extrabold uppercase tracking-widest'>Archives  <span className='text-blue-500'> \\\ </span></h1>
            <ul className='mt-5 space-y-3  divide-y divide-amber-400'>
                <li>July 2015</li>
                <li>may 2017</li>
                <li>august 2019</li>
                <li>june 2021</li>
                <li>February 2022</li>
            </ul>
            
        </div>
        <div className='w-80 mt-10 '>
        <h1 className='font-extrabold uppercase tracking-widest'>latest comments <span className='text-blue-500'> \\\ </span></h1>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Footer;