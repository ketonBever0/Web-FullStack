import React, { useContext } from 'react';
import FileContext from './context/fileContext';
import axios from 'axios';
import Notify from '../allUse/Toasts';

function File({ path }) {

    const { deleteFile } = useContext(FileContext);


    return (
        <div className='col-sm p-0 d-flex justify-content-center my-4'>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <div className="container">
                        <div className="row mt-3 mb-4 py-1 border-bottom border-secondary rounded-bottom">
                            <div className="col-sm">
                                <button className="btn bg-danger text-white" onClick={(e) => { e.preventDefault(); deleteFile(path); }}>Törlés</button>
                            </div>
                            <div className="col-sm">
                                <a href={`http://127.0.0.1:8000/api/files/${path}`} target="_blank" className="btn btn-primary">Mentekintés</a>
                            </div>
                        </div>
                    </div>
                    <img className="card-img-top" src={`http://127.0.0.1:8000/api/files/${path}`} alt={path} title={path} />
                </div>
            </div>
        </div>
    )
}

export default File