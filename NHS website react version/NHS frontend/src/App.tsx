import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Volunteer from './pages/Volunteer'
import About from './pages/About'
import Forms from './pages/Forms'
import CarolingInfo from './pages/CarolingInfo'
import VolunteerIdeas from './pages/VolunteerIdeas'
import Gallery from './pages/Gallery'
import Tutoring from './pages/Tutoring'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Navbar/>
    <div className="app">
      
       <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Contact/>} path="/contact/"/>
        <Route element={<About/>} path="/about/"/>
        <Route element={<Volunteer/>} path="/volunteer/"/>
        <Route element={<Forms/>} path="/forms/"/>
        <Route element={<CarolingInfo/>} path="/caroling/"/>
        <Route element={<VolunteerIdeas/>} path="/volunteerideas/"/>
        <Route element={<Gallery/>} path="/gallery/"/>
        <Route element={<Tutoring/>} path="/tutoring/"/>


      </Routes>
      
    </div>
  
  </>
  )
}

export default App
