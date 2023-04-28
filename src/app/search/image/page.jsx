import ImageSearchResults from '@/components/ImageSearchResults'
import Link from 'next/link'
import React from 'react'

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1"
  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  const response = await fetch(url)
  const data = await response.json()
  const results = data.items
  
  
  if(!results) {
    return (
      <div className='flex justify-center items-center text-2xl flex-col'>
        <h1>No Results Found</h1>
        <p>Go to Homepage <Link href={'/'} className='text-blue-500'> Home </Link></p>
      </div>
    )
  }
  
  return (
    <>
     <ImageSearchResults result = {data}/> 
    </>
  )
}
