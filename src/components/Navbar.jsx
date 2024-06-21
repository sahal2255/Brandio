import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className='flex gap-x-8 h-5 justify-between'>
        <h1 className='px-4'>brand.io</h1>
        <a href="" className=''>Home</a>
        <a href="" className=''>About</a>
        <a href="" className=''>Testimonial</a>
        <a href="" className=''>Contact Us</a>
        <button className=''>Login</button>
        <button className='px-10 bg-green-500 rounded h-9'>SignUp</button>
      </div>
    </div>
  )
}
