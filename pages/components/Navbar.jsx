import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <ul className='flex justify-end'>
            <li className='px-4'>
                <Link href='/'>Home</Link>
            </li>
            <li className='px-4'>
                <Link href='/services'>Services</Link>
            </li>
            <li className='px-4'>
                <Link href='/'>About Us</Link>
            </li>
            <li className='px-4'>
                <Link href='/gallery'>Gallery</Link>
            </li>
            <li className='px-4'>
                <Link href='/'>Contact Us</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar