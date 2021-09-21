import React, { useState, useEffect } from 'react'
import { getTodaysImage } from '../requests/Requests'
import ImageItem from '../components/ImageItem'
import NavBar from '../components/Nav'

function Home() {
  const [photo, setPhoto] = useState({
    "copyright": undefined,
    "date": undefined,
    "explanation": undefined,
    "title": undefined,
    "url": undefined
  })

  useEffect(() => {
    getTodaysImage().then((res) => {
      setPhoto(res)
    })
  }, [])

  return (
    <div>
      {/* <NavBar /> */}
      <ImageItem photo={photo} />
    </div>
  )
}

export default Home
