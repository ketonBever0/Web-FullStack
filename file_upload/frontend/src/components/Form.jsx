import React, { useContext } from 'react'
import FileContext from './context/fileContext'

function Form() {

    const {
        refresh, update,
        isLoading,
        fetchFiles, uploadFile,
        files, setFiles,
        inputFile, setInputFile
    } = useContext(FileContext);

    const handleChange = (e) => {
        setInputFile({
            ...inputFile,
            [e.target.name]: e.target.files[0]
        });
        console.log(e.target.files);
        console.log(inputFile.file);
        // setFormData({
        //     ...formData,
        //     [event.target.id]: event.target.value,
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (inputFile == null) return
        await uploadFile(inputFile.file);
    }

    return (
        <div>
            <form>
                <label htmlFor="formFile" className="form-label">Default file input example</label>
                <input className="form-control" type="file" id="formFile" name='file' onChange={handleChange} accept="image/png, image/jpeg" />
                <button type='submit' onClick={onSubmit}>Feltöltés!</button>
            </form>

        </div>
    )
}

export default Form