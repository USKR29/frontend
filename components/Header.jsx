"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
const [isOpen, setIsOpen] = useState(false)
const toggle = () =>{
setIsOpen(!isOpen)
}
  return (
    <header className='fixed top-0 z-30 w-full text-black  bg-white shadow-sm mb-5'>
    <div className='max-w-7xl mx-auto flex items-center justify-between p-2.5'>
    <div className=' flex items-center gap-2'>
    <Image src='/dialogos-new.png' width="80" height="10" className='rounded-full w-20 border-2 border-red-200'/>
    <h2 className=' text-cyan-900 font-semibold text-lg'>Geeyem.</h2>
    </div>
    <div onClick={toggle} className={`md:hidden uppercase`}
    >
    Menu
    </div>
    <nav className={`${!isOpen && 'hidden'} absolute flex flex-col
     bg-white top-full w-full left-0 z-20 md:static md:w-auto md:flex`}>
    <ul className='md:flex-row md:flex'>
    <li className='list-none md:mr-5'>
    <Link href='/'>
    Home
    </Link>
    </li>
    <li className='list-none md:mr-5'>
    <Link href='/#aboutus'>
    About Us
    </Link>
    </li>
    <li className='list-none md:mr-5'>
    <Link href='/#services'>
    Services
    </Link>
    </li>
    <li className='list-none md:mr-5'>
    <Link href='/products'>
    Products
    </Link>
    </li>
    <li className='list-none md:mr-5'>
    <Link href='/contact'>
    Contact Us
    </Link>
    </li>
    </ul>
    </nav>
    </div>
    </header>
  )
}
 export default Header