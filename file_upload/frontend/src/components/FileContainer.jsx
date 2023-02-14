import React, { useContext, useEffect } from 'react'
import FileContext from './context/fileContext'
import File from './File';

function FileContainer() {

    const {
        files,
        fetchFiles,
        update
    } = useContext(FileContext);

    useEffect(() => {
        fetchFiles();
        update();
    }, [files])


    return (
        <div>
            {files && files.map((file, index) => <File path={file.path} key={index} />)}
        </div>
    )
}

export default FileContainer