// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FileProvider } from './components/context/fileContext';
import Form from './components/Form';

function App() {

  return (
    <div>
      <FileProvider>

        <div className="container-fluid">
          <Form />


        </div>

      </FileProvider>
    </div>
  )
}

export default App
