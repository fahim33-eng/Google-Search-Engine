import Link from 'next/link'
import React from 'react'
import { TbGridDots } from 'react-icons/tb'

export default function HomeHeader() {
  return (
    <header className='flex justify-end p-7'>
      <div className='flex space-x-4 items-center'>
        <Link href="https://www.gmail.com" className="hover:underline">
            Gmail
        </Link>
        <Link href="https://www.google.com" className='hover:underline'>
            Images
        </Link>
        <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl' />
        <button className='bg-blue-500 text-white px-6 py-2 rounded-md hover:brightness-105 transition-shadow hover:shadow-md'> Sign In </button>
      </div>

    </header>
  )
}
