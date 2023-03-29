import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextEditor from './pages/TextEditor'
import Header from './components/Header'

function App() {

  return (
    <div className='min-h-screen bg-white text-black'>
      <Header />
      <TextEditor />
    </div>
  )
}

export default App
