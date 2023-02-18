// import { useState } from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FileProvider } from './components/context/fileContext';
import Form from './components/Form';
import FileContainer from './components/FileContainer';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="container-fluid">
      <FileProvider>

        <div>
          <Form />
          <FileContainer />

        </div>

        <Toaster />
      </FileProvider>
    </div>
  )
}

export default App
