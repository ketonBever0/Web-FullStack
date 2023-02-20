import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import { UserProvider } from './comp/context/UserContext'
import FileUpload from './comp/FileUpload'
import Header from './comp/Header'
import Login from './comp/Login'
import Main from './comp/Main'
import Menu from './comp/Menu'
import Register from './comp/Register'
import UserData from './comp/UserData'

function App() {


  return (
    <UserProvider>

      <div className='container ml-10'>
        <h1 className='text-3xl font-bold'>User login Frontend</h1>
        {/* <Header headerText={"Fejléc"} /> */}
        <Router>
          <Menu />
          <Routes>
            <Route path='*' element={<Main />} />
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/userdata' element={<UserData />} />
            <Route path='/fileupload' element={<FileUpload />} />
          </Routes>
        </Router>
      </div>

      <Toaster />
    </UserProvider>
  )
}

export default App
