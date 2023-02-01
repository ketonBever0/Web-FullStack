import React, { useState, useEffect, createContext } from 'react';
import Notify from '../../Toasts';

const UserContext = createContext();


export const UserProvider = ({ children }) => {



    const [Refresh, setRefresh] = useState(false);
    const [UserData, setUserData] = useState(null);
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    const update = () => {
        setRefresh(prev => !prev);
    }


    const logout = () => {
        localStorage.removeItem('usertoken');
        update();
        setIsLoggedIn(false);
        Notify.tSuccess("Kijelentkezve");
    }

    const token = localStorage.getItem('usertoken');


    useEffect(() => {
        if (token) {
            if (token.message || token == null) {
                setIsLoggedIn(false);
                logout();
            }
        }
    })



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
                    if (!data.message) {
                        setUserData(data)
                        setIsLoggedIn(true);
                    } else {
                        localStorage.removeItem('usertoken');
                        // Notify.tError("Lejárt a munkamenet! Lépjen be újra");
                        setIsLoggedIn(false);
                    }
                })
                .catch(err => console.log(err));
        } else {

        }
    }, []);

    const RsendData = (formData, method) => {

        fetch('http://localhost:8000/api/user/register', {
            method: method,
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(token => {
                if (!token.message) {
                    localStorage.setItem('usertoken', token)
                    Notify.tSuccess("Sikeres regisztráció!");
                    setIsLoggedIn(true);
                    update();
                } else {
                    // Notify.tError("Token lejárt!");
                    localStorage.removeItem('usertoken');
                    setIsLoggedIn(false);
                    update();
                }


            })
            .catch(err => Notify.tError(err));
    }


    const LsendData = (formData, method) => {

        fetch('http://localhost:8000/api/user/login', {
            method: method,
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(token => {
                if (!token.message) {
                    localStorage.setItem('usertoken', token);
                    setIsLoggedIn(true);
                    update();
                    // Notify.tSuccess(token);
                    Notify.tSuccess("Sikeres bejelentkezés!");
                } else {
                    setIsLoggedIn(false);
                    Notify.tError(token.message);
                }
            })
            .catch(err => console.log(err));


    }


    const checkToken = () => {
        if (token.message) {
            logout();
            // Notify.tError("Lejárt a munkamenet! Lépjen be újra");
        }
    }



    return <UserContext.Provider value={{
        Refresh, update,
        logout,
        UserData,

        RsendData,
        LsendData,

        IsLoggedIn, setIsLoggedIn

    }}>{children}</UserContext.Provider>
};

export default UserContext;