import { createContext, useEffect, useState } from "react";
import Notify from "../../Toasts";


const ImageContext = createContext();


export const ImageProvider = ({ children }) => {


    const [imgRefresh, setImgRefresh] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    // const [userData, setUserData] = useState(null);

    const token = localStorage.getItem('usertoken');



    const imgUpdate = () => setImgRefresh(prev => !prev);


    const [userImages, setUserImages] = useState([]);


    useEffect(() => {
        setUserImages([]);
        fetch('http://localhost:8000/api/files/get', {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setUserImages(data))
            .catch(err => console.log(err));
        // console.log(userImages);
    }, [imgRefresh])


    const uploadFiles = (data) => {
        fetch('http://localhost:8000/api/files/upload', {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: data
        })
            .then(res => res.json())
            .then(valasz => Notify.tSuccess(valasz.message))
            .catch(err => Notify.tError(err));
        imgUpdate();
    }


    const imgDelete = async (imgId) => {
        if (token) {
            await fetch(`http://localhost:8000/api/files/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    imgId: imgId
                })
            })
                .then(res => { res.json; if (res.status == 200) Notify.tSuccess("Sikeres törlés"); else Notify.tError("Hiba!"); })
                .catch(err => console.log(err));
            imgUpdate();
        }
    }



    return <ImageContext.Provider value={{
        userImages,
        uploadFiles,
        imgRefresh, imgUpdate,
        deleteModalOpen, setDeleteModalOpen,
        imgDelete
    }}>{children}</ImageContext.Provider>
}

export default ImageContext;