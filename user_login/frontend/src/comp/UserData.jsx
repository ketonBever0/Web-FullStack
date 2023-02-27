import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import Notify from '../Toasts';
import UserContext from './context/UserContext';
import ReactModal from 'react-modal';

function UserData() {

    const [UserData, setUserData] = useState(null);
    const navigate = useNavigate();

    const token = localStorage.getItem('usertoken');

    const { logout } = useContext(UserContext);


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
        } else {
            logout();
            // Notify.tError("Jelentkezzen be");
            navigate('/login');
        }
    }, []);



    const [userImages, setUserImages] = useState([]);


    useEffect(() => {
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
    }, [])

    const [isOpen, setIsOpen] = useState(false);

    const modalStyle = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: "black",
            color: "white"
        },
    };


    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);



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
                {userImages && userImages.length > 0 && userImages.map((image, index) => (
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img key={index} src={encodeURI(`http://localhost:8000/files/${UserData?.username}/${image.imageName}`)} /></figure>
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Törlés</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* </div> */}



        </div>



    )
}

export default UserData