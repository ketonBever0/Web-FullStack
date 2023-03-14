import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import Notify from '../Toasts';
import UserContext from './context/UserContext';
import ImageContext from './context/ImageContext';
import ReactModal from 'react-modal';
import { confirm } from 'react-confirm-box';

function UserData() {

    const [UserData, setUserData] = useState(null);
    const navigate = useNavigate();

    const token = localStorage.getItem('usertoken');

    const { logout } = useContext(UserContext);

    const {
        userImages,
        imgUpdate, imgRefresh,
        deleteModalOpen, setDeleteModalOpen,
        imgDelete
    } = useContext(ImageContext);


    useEffect(() => {
        if (token) {
            fetch('http://localhost:8000/api/user', {
                method: 'GET',
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    !data.message ?
                        setUserData(data)
                        :
                        localStorage.removeItem('usertoken');
                })
                .catch(err => {
                    console.log(err);
                    logout();
                    navigate('/');
                });
            console.log("object");
        } else {
            logout();
            // Notify.tError("Jelentkezzen be");
            navigate('/login');
        }
    }, [imgRefresh, userImages]);




    const deleteConfirmOptions = {
        closeOnOverlayClick: true,
        render: (message, onConfirm, onCancel) => {
            return (
                <div className='bg-info p-5 border rounded' style={{ position: "fixed", left: "40rem", top: "20rem", height: "fit-content" }}>
                    <h1 className='mb-5'>{message}</h1>
                    <div className="d-flex justify-content-around">
                        <button className='btn btn-danger p-3' onClick={onConfirm}>Igen</button>
                        <button className='btn btn-primary p-3' onClick={onCancel}>Nem</button>
                    </div>
                </div>
            );
        }
    };


    const handleDelete = async (imgId) => {

        if (await confirm("Biztos törli a képet?", deleteConfirmOptions)) {
            imgDelete(imgId);
        }

    }




    return (
        <div>
            <div>
                <p>{UserData?._id}</p>
                <p>{UserData?.username}</p>
                <p>{UserData?.email}</p>
                <p>{UserData?.age}</p>
            </div>
            {/* <div className='grid grid-flow-row'> */}
            <div className='grid grid-flow-col'>
                {UserData && userImages && userImages.length > 0 && userImages.map((image, index) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={encodeURI(`http://localhost:8000/files/${UserData?.username}/${image.imageName}`)} /></figure>
                        <div className="card-body">
                            <p>{image._id}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleDelete(image._id)} className='btn btn-primary'>Törlés</button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* </div> */}


        </div>



    )
}

export default UserData;