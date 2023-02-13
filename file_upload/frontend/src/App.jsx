// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FileContext from './components/context/fileContext';

function App() {

  return (
    <div>
      <FileContext>

        <div class="mb-3">
          <label for="formFile" className="form-label">Default file input example</label>
          <input className="form-control" type="file" id="formFile" />
        </div>

      </FileContext>
    </div>
  )
}

export default App
