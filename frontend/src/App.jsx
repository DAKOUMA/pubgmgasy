import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Scrims from './Pages/Scrims'
import Server from './Pages/Server'
import Event from './Pages/Event'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/scrims' element={<Scrims/>} />
      <Route path='/server' element={<Server/>} />
      <Route path='/event' element={<Event/>} />
    </Routes>
  )
}

export default App
