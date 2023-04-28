"use client"
import React from 'react'

export default function error({ error, reset }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl'>Something Went Wrong</h1>
      <button className='text-blue-500 underline' onClick={() => reset() }> Try Again </button>
    </div>
  )
}
