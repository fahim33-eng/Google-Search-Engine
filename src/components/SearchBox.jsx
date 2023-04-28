'use client'
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { useRouter } from 'next/navigation'

export default function SearchBox() {
    const searchParams = useSearchParams();
    const search = searchParams.get('searchTerm');
    const [term, setTerm] = useState(search || "")
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!term.trim()) return
        router.push(`/search/web?searchTerm=${term}`)
    }

    return (
        <form className='flex  shadow-md rounded-full space-x-3 items-center flex-grow px-5' onSubmit={handleSubmit}>
        <div  className='flex flex-grow items-center rounded-full'> 
            <input type='text' value={term} className='flex-grow w-full rounded-full p-3 items-center focus:outline-none' onChange={(e) => setTerm(e.target.value)}/>
            <RxCross2 onClick={() => setTerm("")} className='text-2xl text-gray-400 mr-2 cursor-pointer'/>
        </div>
        <BsFillMicFill className='border-l-2 ml-3 mr-3 pl-5 text-5xl border-gray-300 text-2xl text-blue-500'/>
        <AiOutlineSearch onClick={handleSubmit} className='text-2xl text-blue-500 cursor-pointer'/>
        </form>
    )
}
