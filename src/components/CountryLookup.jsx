"use client"
import React, { useEffect, useState } from 'react'

export default function CountryLookup() {
    const url = "http://api.ipstack.com/103.181.105.226?access_key=dc378c6116c4fc1564babe6851f609b0&format=1"
    const [country, setCountry] = useState("United States")
    // useEffect(async () => {
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     setCountry(data.country_name)
    // }, [])
    return (
    <div>
      <h1>{country}</h1>
    </div>
  )
}
