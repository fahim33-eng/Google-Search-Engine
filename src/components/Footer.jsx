import React from 'react'
import CountryLookup from './CountryLookup'

export default function Footer() {
  return (
    <footer className='absolute bottom-0 text-gray-500 bg-[#f2f2f2] text-sm w-full'>
        <div className='border-b px-8 py-3'>
            <CountryLookup />
        </div>
        <div className='flex justify-between items-center px-8 py-6'>
            <ul className='flex space-x-6 items-center'>
                <li className='link'>About</li>
                <li className='link'>Business</li>
                <li className='link'>How Search Works</li>
            </ul>
            <ul className='flex space-x-6 items-center'>
                <li className='link'>Privacy</li>
                <li className='link'>Terms</li>
                <li className='link'>Settings</li>
            </ul>
        </div>
    </footer>
  )
}
