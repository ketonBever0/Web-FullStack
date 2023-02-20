import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import Notify from '../Toasts';
import UserContext from './context/UserContext';

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



    return (
        <div>
            <div>
                <p>{UserData?._id}</p>
                <p>{UserData?.username}</p>
                <p>{UserData?.email}</p>
                <p>{UserData?.age}</p>
            </div>
            <div className='grid grid-flow-row auto-rows-max'>
                {userImages && userImages.length > 0 && userImages.map((image, index) => (
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <img key={index} src={encodeURI(`http://localhost:8000/files/${UserData?.username}/${image.imageName}`)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default UserData