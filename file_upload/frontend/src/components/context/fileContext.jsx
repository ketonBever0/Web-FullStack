import axios from 'axios';
import React, { useState, useEffect, createContext } from 'react';


const FileContext = createContext();


export const FileProvider = ({ children }) => {

    const [refresh, setRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [files, setFiles] = useState(null);

    const [inputFile, setInputFile] = useState(null);


    const update = () => setRefresh(prev => !prev);

    const fetchFiles = async () => {
        setIsLoading(true);
        await fetch('http://localhost:8000/api/files')
            .then(res => res.json())
            .then(data => setFiles(data))
            .catch(err => console.log(err));
        setIsLoading(false);
    }

    const uploadFile = async (file) => {
        // console.log(file);

        const fileForm = new FormData();
        fileForm.append("file", file);
        fileForm.append("fileName", file.name);

        // console.log(fileForm);

        await axios.post('http://localhost:8000/api/files', fileForm, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).catch(err => console.log(err))


        // await fetch('http://localhost:8000/api/files', {
        //     method: 'POST',
        //     body: {
        //         files: {
        //             file: file
        //         }
        //     },
        //     headers: {
        //         'content-type': file.type,
        //         'content-length': `${file.size}`
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => setFiles(data))
        //     .catch(err => console.log(err));

    }





    return <FileContext.Provider value={{
        refresh, update,
        isLoading,
        fetchFiles, uploadFile,
        files, setFiles,
        inputFile, setInputFile
    }}>{children}</FileContext.Provider>
}

export default FileContext;