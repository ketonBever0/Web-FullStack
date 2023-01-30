import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Notify from '../Toasts';

function UserData() {

    const [UserData, setUserData] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('usertoken');


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
                .catch(err => console.log(err));
        } else {
            navigate('/login');
            // Notify.tError("Be kell jelentkezni");
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