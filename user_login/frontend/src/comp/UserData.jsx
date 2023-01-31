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





    return (
        <div>
            <p>{UserData?.username}</p>
            <p>{UserData?.email}</p>
            <p>{UserData?.age}</p>
        </div>
    )
}

export default UserData