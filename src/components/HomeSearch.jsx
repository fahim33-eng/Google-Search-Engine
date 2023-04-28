'use client'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

export default function HomeSearch() {
  const [input, setInput] = useState("")
  const [randomSearchLoading, setRandomSearchLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    router.push(`/search/web?searchTerm=${input}`)

  }

  const randomSearch = async (e) => {
    setRandomSearchLoading(true)
    e.preventDefault()
    const url = "https://random-word-api.herokuapp.com/word"
    const response = (await fetch(url))
    const data = await response.json()
    router.push(`/search/web?searchTerm=${data[0]}`)
    setRandomSearchLoading(false)
  }
  return (
    <>
        <form onSubmit={handleSubmit} className='flex w-full border-gray-200 mx-auto p-5 mt-5 rounded-full 
        shadow-md max-w-[70%]'>
            <AiOutlineSearch className='text-xl text-gray-500 mr-3'/>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} className='flex-grow focus:outline-none'/>
            <BsFillMicFill className='text-lg'/>
        </form>
        <div className='flex space-x-4'>
          <button onClick={handleSubmit} className='btn'>Google Search</button>
          <button disabled={randomSearchLoading} onClick={randomSearch} className='btn disabled:opacity-60 flex justify-center items-center'>
            { randomSearchLoading ? (
                <img src='spinner.svg' alt='loading' className='h-6 text-center'/>
              ) : (
                "I'm Feeling Lucky"
              )}

          </button>
        </div>
    </>
  )
}
