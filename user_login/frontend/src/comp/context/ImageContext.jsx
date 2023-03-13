import { createContext, useEffect, useState } from "react";
import Notify from "../../Toasts";


const ImageContext = createContext();


export const ImageProvider = ({ children }) => {


    const [imgRefresh, setImgRefresh] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    // const [userData, setUserData] = useState(null);

    const token = localStorage.getItem('usertoken');

    // useEffect(() => {
    //     if (token) {
    //         fetch('http://localhost:8000/api/user', {
    //             method: 'GET',
    //             headers: {
    //                 "Content-type": "application/json",
    //                 "Authorization": `Bearer ${token}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (!data.message) {
    //                     setUserData(data)

    //                 } else {

    //                     // Notify.tError("Lejárt a munkamenet! Lépjen be újra");

    //                 }
    //             })
    //             .catch(err => console.log(err));
    //     } else {

    //     }
    // }, []);


    const imgUpdate = () => setImgRefresh(prev => !prev);


    const imgDelete = (imgId) => {
        fetch(`http://localhost:8000/api/files/delete`, {
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



    return <ImageContext.Provider value={{
        imgRefresh, imgUpdate,
        deleteModalOpen, setDeleteModalOpen,
        imgDelete
    }}>{children}</ImageContext.Provider>
}

export default ImageContext;