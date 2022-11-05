import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav]=useState(true);

    const handleNav=()=>{
        setNav(!nav);
    }
  return (
<div>
<div className='flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto'>
    <Image src={ Logo } alt='Logo' width={200} height={200}/>
    <ul className='hidden md:flex pr-8'>
        <li className='p-4'>
            <Link href='/'>Home</Link>
        </li>
        <li className='p-4'>
            <Link href='/Services'>Services</Link>
        </li>
        <li className='p-4'>
            <a href="#">About Us</a>
        </li>
        <li className='p-4'>
            <Link href='/Gallery'>Gallery</Link>
        </li>
        <li className='p-4'>
            <a href="#">Contact</a>
        </li>
    </ul>
    <button className='hidden md:block border-2 border-black p-2 ' type='button'>
        <a href='https://booking.gocheckin.net/v2/12536' rel='noreferrer' target='_blank'>Book Now</a>
    </button>

    <div onClick={handleNav} className='block md:hidden pr-2'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
</div>

    {/* Mobile Menu */}
    <div className={!nav ? 'fixed px-3 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-[#ffefcd]' : 'fixed left-[-100%]'}>
            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-600'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 border-b border-gray-600'>
                    <Link href='/Services'>Services</Link>
                </li>
                <li className='p-4 border-b border-gray-600'>
                    <a href="#">About</a>
                </li>
                <li className='p-4 border-b border-gray-600'>
                    <Link href='/Gallery'>Gallery</Link>
                </li>
                <li className='p-4 border-b border-gray-600'>
                    <a href="#">Contact</a>
                </li>
            </ul>
        <div className='pt-3 pl-6'>
            <button className=' p-2 border-2 border-black' type='button'>
                <a href='https://booking.gocheckin.net/v2/12536' rel='noreferrer' target='_blank'>Book Now</a>
            </button>
        </div>
    </div>
 </div>
</div>
)
}

export default Navbar