import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container flex justify-between items-center mx-auto'>
        <Image src={ Logo } alt='Logo' width={150} height={150}/>
        <div>
            <ul className='flex justify-between items-center'>
                <li className='px-2'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='px-2'>
                    <a href='#'>About</a>
                </li>
                <li className='px-2'>
                    <Link href='/Services'>Services</Link>
                </li>
                <li className='px-2'>
                    <Link href='/Gallery'>Gallery</Link>
                </li>
                <li className='px-2'>
                    <a href='#'>Contact</a>
                </li>
            </ul>
        </div>
        <button type='button' className='px-2'>
            <a href='https://booking.gocheckin.net/v2/12536' target='_blank' rel='noreferrer'>Book Now</a>
        </button>
    </nav>

  )
}

export default Navbar