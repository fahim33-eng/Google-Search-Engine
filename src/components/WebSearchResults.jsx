import Link from 'next/link'
import React from 'react'
import Parser from 'html-react-parser'
import PaginationButtons from './PaginationButtons'

export default function WebSearchResults({ result }) {
  return (
    <div className='mx-auto w-full px-3 pb-24 pl-52'>
        <p className="mt-3 mb-5 text-gray-500 text-sm">About {result.searchInformation.formattedTotalResults} results ({result.searchInformation.formattedSearchTime} Seconds)</p>
        {result.items.map((r) => {
            return (
                <div key={r.link}>
                    <div className='mt-5 mb-5'>
                        <Link href={r.link}>{r.formattedUrl}</Link>
                        <h1 className='text-2xl hover:underline text-blue-800'><Link href={r.link}>{r.title}</Link></h1>
                        <p className='text-gray-700'>{Parser(r.htmlSnippet)}</p>
                    </div>
                </div>
            )
        })}
        <div className='mb-5'>
            <PaginationButtons />
        </div>
    </div>
  )
}
