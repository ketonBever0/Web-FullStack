import React, { useContext, useEffect } from 'react'
import { BeatLoader } from 'react-spinners';
import FileContext from './context/fileContext'
import File from './File';

function FileContainer() {

    const {
        files,
        fetchFiles,
        refresh,
        isLoading
    } = useContext(FileContext);

    useEffect(() => {
        fetchFiles();
    }, [refresh])


    return (
        <div className='row'>
            {isLoading ?
                <div className="col d-flex justify-content-center my-4"><BeatLoader color="#36d7b7" /></div>
                :
                (files && files.length>0 && files.slice(0).reverse().map((file, index) => <File path={file.path} key={index} />))}
        </div>
    )
}

export default FileContainer