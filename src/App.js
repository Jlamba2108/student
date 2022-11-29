import React from 'react'
import logo from './logo.svg'
import './App.css'
import {studentProfile, studentImage,studentContact} from './components/studentContainer'

function App() {
  return (
    <div className="App">
        <studentProfile />
        <studentImage />
        <studentContact />
    </div>
  )
}

export default App
