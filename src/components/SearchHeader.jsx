import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import { TbGridDots } from 'react-icons/tb'
import { RiSettings3Line } from 'react-icons/ri'
import SearchOptions from './SearchOptions'

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white mb-5'>
      <div className='flex justify-between p-8 items-center'>
        <Link href="/"> 
            <Image className='ml-15' height="40" width="120" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"/>   
        </Link>
        <div className='flex flex-grow max-w-[70%]'>
            <SearchBox />
        </div>
        <div className='flex space-x-4'>
            <RiSettings3Line className='bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl' />
            <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl' />
            <button className='bg-blue-500 text-white px-6 py-2 rounded-md hover:brightness-105 transition-shadow hover:shadow-md'> Sign In </button>
        </div>
      </div>
      <SearchOptions />
    </header>
  )
}
