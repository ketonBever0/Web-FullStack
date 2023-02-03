// import './App.css'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { OpenAI_Provider } from './comp/context/OpenAI_C';

import Title from "./comp/Title"
import NavBar from "./comp/NavBar"
import Main from './comp/Main';
import ImageGenerate from './comp/ImageGenerate';

function App() {


  return (
    <OpenAI_Provider>
    
    <div className='bg-neutral text-neutral-content' data-theme="wireframe">
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

    </OpenAI_Provider>
  )
}

export default App
