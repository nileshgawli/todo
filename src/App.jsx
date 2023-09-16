import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Timeline from './components/Timeline'

function App() {

  return (
    <>
        <div className="h-screen bg-accent">
          <div className="h-screen bg-dark">
            <Navbar/>
            <Timeline/>
          </div>
        </div>
    </>
  )
}

export default App
