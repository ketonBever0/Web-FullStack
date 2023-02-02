// import './App.css'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageGenerate from './comp/ImageGenerate';
import Main from './comp/Main';


import NavBar from "./comp/NavBar"
import Title from "./comp/Title"

function App() {


  return (
    <div className='bg-base-100' data-theme="retro">
      <div className='container px-auto px-10 min-h-screen'>
        <Title />
        <Router>
          <NavBar />
          <Routes>
            <Route path='*' element={<Main />} />
            <Route path='/' element={<Main />} />
            <Route path='/generateimage' element={<ImageGenerate />} />
          </Routes>
        </Router>

        <Toaster />
      </div>
    </div>
  )
}

export default App
