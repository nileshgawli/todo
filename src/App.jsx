import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
        <div className="h-screen bg-accent">
          <div className="h-screen bg-dark">
            <Navbar/>
          </div>
        </div>
    </>
  )
}

export default App
