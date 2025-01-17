import React from 'react'
import { GiArtificialIntelligence } from "react-icons/gi";

const Menu = [
    {
        name: 'Home',
        link: '#hero', 
        id: 1
    }, 
    {
        name: 'About',
        link: '#about',
        id: 2
    },
    {
        name: 'Products',
        link: '#services',
        id: 3
    },
    {
        name: 'Contact',
        link: '#contact',
        id: 4
    }
]

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full items-center flex bg-secondary/80 py-2 shadow-md z-50 justify-evenly'>
      {/* Logo */}
        <a href='#hero' className='font-bold items-center text-2xl  hover:text-red-100 duration-200 sm:text-3xl flex gap-2'>
            <GiArtificialIntelligence className='hidden sm:block text-red-100'/>
            AI Market
        </a>
      {/* Menu Items */}
      <div>
        <ul className='flex gap-7 justify-center items-center'>
        {
            Menu.map((item) => (
                <a href={item.link} key={item.id} className='inline-block font-semibold-serifpx-4 hover:text-red-100 duration-200 items-center'>
                    {item.name}
                </a>
            ))
        }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
