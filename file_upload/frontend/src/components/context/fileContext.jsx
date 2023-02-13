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


    return <FileContext.Provider value={{
        refresh, update,
        isLoading,
        fetchFiles,
        files, setFiles
    }}>{children}</FileContext.Provider>
}

export default FileContext;