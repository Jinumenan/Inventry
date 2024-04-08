import React from 'react'
import Logo from '../src/assets/Logo.png'

export default function Navbar() {
  return (
    <div className='flex justify-between  mt-4 px-14 '>
        <div><img  className='w-[120px] h-[48px] ' src={Logo} alt='Logo'/></div>
        <div>
            <ul className='flex gap-6'>
              <li className='hover:text-[#75d705] hover:border-solid cursor-pointer text-2xl font-serif'>Inventory Page</li>
            </ul>
        </div>
        <div><h1 className='Navbart_btn'>Login</h1></div>
    </div>
  )
}
