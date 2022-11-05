import React from 'react'
import Image from 'next/image'
import HeroImg from '../public/assets/hero.jpg'

const Hero = () => {
  return (
    <div className='bg-[#e09132] w-full h-screen py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div>
                <h1 className='md:text-xl sm:text-3xl text-2xl font-bold pb-2'>Welcome to Lee Nails</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, alias!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat consequuntur, laboriosam consectetur quas cum ducimus delectus porro praesentium dolor, rem debitis ea maxime sunt saepe. Magnam sint harum minus?</p>
                <button className='hidden md:block border-2 border-black p-2 ' type='button'>
                    <a href='https://booking.gocheckin.net/v2/12536' rel='noreferrer' target='_blank'>Book Now</a>
                </button>
            </div>
            <Image src={HeroImg} alt='/'/>
        </div>
    </div>
  )
}

export default Hero