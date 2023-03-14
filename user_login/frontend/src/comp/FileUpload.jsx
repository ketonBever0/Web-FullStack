import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Notify from '../Toasts';
import ImageContext from './context/ImageContext';

function FileUpload() {

    const navigate = useNavigate();
    const token = localStorage.getItem('usertoken');
    const [images, setImages] = useState([]);


    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token])

    const imageChange = (e) => {
        setImages([
            ...images,
            ...e.target.files
        ])
    }

    const {
        uploadFiles
    } = useContext(ImageContext);


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        images.map((file, index) => formData.append("file" + index, file))
        // for (let i = 0; i < images.length; i++) {
        //     formData.append("file" + i, images[i])
        // }
        uploadFiles(formData);
    }


    return (
        <div>
            <h2 className="text-4xl text-center mt-5 mb-12 font-bold">Fájlok feltöltése</h2>
            <div className='flex justify-center items-center'>
                <form onSubmit={onSubmit}>
                    <input type="file" onChange={imageChange} multiple required className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                    <div className="w-full max-w-xs mt-10">
                        <p>{images.length}</p>
                        <button type="submit" className='btn btn-primary'>Feltöltés</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FileUpload