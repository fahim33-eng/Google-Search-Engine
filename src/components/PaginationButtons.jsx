"use client"
import React from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Link from 'next/link'

export default function PaginationButtons() {
  const pathName = usePathname()
  const searchName = useSearchParams()  
  const searchTerm = searchName.get("searchTerm")
  const startIndex = +searchName.get("start") || 1

  return (
    <div className='flex space-x-10'>
      {startIndex > 10 && (
        <Link href= {`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
            <div className='flex space-x-2 items-center text-blue-800'>
                <BsChevronLeft />
                <p>Prev</p>
            </div>
        </Link>
      )}
      <div>
        <Link href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
            <div className='flex space-x-2 items-center text-blue-800'>
                <BsChevronRight />
                <p>Next</p>
            </div>
        </Link>
      </div>
    </div>
  )
}
