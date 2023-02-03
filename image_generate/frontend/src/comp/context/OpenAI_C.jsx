import React, { useState, useEffect, createContext } from 'react';
import Notify from '../AllUse/Toasts';


const OpenAI_Context = createContext();

export const OpenAI_Provider = ({ children }) => {


    const [Refresh, setRefresh] = useState(false);
    const [IMGgenData, setIMGgenData] = useState(undefined);
    const [IsLoading, setIsLoading] = useState(false);


    const update = () => setRefresh(prev => !prev);


    const IMGgen = async (formData) => {
        setIsLoading(true);
        await fetch('http://localhost:8000/api/generateimage', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => setIMGgenData(data))
            .catch(err => console.log(err));
        setIsLoading(false);
        // update();
    }



    return <OpenAI_Context.Provider value={{
        Refresh, update,
        IMGgenData, setIMGgenData,
        IMGgen,
        IsLoading
    }}>{children}</OpenAI_Context.Provider>
}

export default OpenAI_Context;