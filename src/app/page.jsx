import React from 'react'
import Head from './head'
import HomeHeader from '@/components/HomeHeader'
import Image from 'next/image'
import HomeSearch from '@/components/HomeSearch'

function Home() {
  return (
    <>
      <Head />
      <HomeHeader />
      <div className='flex items-center flex-col mt-24'>
        <Image 
          width= "300"
          height= "100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"

        />
        <HomeSearch />
      </div>
    </>
  )
}

export default Home