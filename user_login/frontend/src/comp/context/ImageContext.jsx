import { createContext, useEffect, useState } from "react";


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


    const imgUpdate = prev => setImgRefresh(!prev);


    const imgDelete = (imgId ,user) => {
        fetch(`http://localhost:8000/files/images}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                imgId: imgId,
                user: user
            })
        })
            .then(res => res.json)
            .catch(err => console.log(err));
    }



    return <ImageContext.Provider value={{
        imgRefresh, imgUpdate,
        deleteModalOpen, setDeleteModalOpen,
        imgDelete
    }}>{children}</ImageContext.Provider>
}

export default ImageContext;