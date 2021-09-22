import React, { useState, useEffect } from 'react'
import NavBar from './components/Nav'
// import ImageItem from './components/ImageItem'
// import { CaretRightFilled, CaretLeftFilled } from '@ant-design/icons'
import Main from './views/Main'
import Footer from './components/Footer'
import { getSpecificImage } from './requests/Requests'
import './App.css';

function App() {
  const today = new Date()
  const [day, setDay] = useState(today)
  const [number, setNumber] = useState(0)
  const [photo, setPhoto] = useState({
    "copyright": undefined,
    "date": undefined,
    "explanation": undefined,
    "title": undefined,
    "url": undefined
  })
  
  useEffect(() => {
    const dateToRequest = day.getFullYear() + '-' + appendZeroes(day.getMonth() + 1) + '-' + appendZeroes(day.getDate())
    getSpecificImage(dateToRequest).then((res) => {
      setPhoto(res)
    })
  }, [day, number])

  const appendZeroes = (n) => {
    if (n <= 9) {
      return '0' + n
    }
    return n
  }
  
  const decrementDate = () => {
    const yesterday = day
    const newnum = number - 1
    yesterday.setDate(yesterday.getDate() - 1)
    setDay(yesterday)
    setNumber(newnum)
  }
  
  const incrementDate = () => {
    const tomorrow = day
    const newnum = number + 1
    tomorrow.setDate(tomorrow.getDate() + 1)
    setDay(tomorrow)
    setNumber(newnum)
  }


  return (
    <div className="App">
      <NavBar />
      <Main photo={photo} number={number} back={incrementDate} next={decrementDate} number={number} />
      <Footer />
    </div>
  );
}

export default App;
