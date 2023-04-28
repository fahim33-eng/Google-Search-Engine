"use client"
import React from 'react'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function SearchOptions() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
    
  const handleSubmitWeb = (e) => {
    e.preventDefault()
    const search = searchParams.get('searchTerm');
    console.log(search)
    router.push(`/search/web?searchTerm=${search}`)
    
  }
  const handleSubmitImage = (e) => {
    e.preventDefault()
    const search = searchParams.get('searchTerm');
    console.log(search)
    router.push(`/search/image?searchTerm=${search}`)
    
  }

  return (
    <div  className='flex space-x-4 justify-start pl-52 text-gray-600'>
      <div onClick={handleSubmitWeb} className={`flex items-center space-x-2 cursor-pointer 
        ${pathname == "/search/web" && "text-blue-500 border-b border-blue-300" }`}>
        <AiOutlineSearch />
        <p>All</p>
      </div>
      <div onClick={handleSubmitImage} className={`flex items-center space-x-2 cursor-pointer 
        ${pathname == "/search/image" && "text-blue-500 border-b border-blue-300" }`}>
        <AiOutlineCamera />
        <p>Images</p>
      </div>
      
    </div>
  )
}
