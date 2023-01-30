import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './context/UserContext';

function Menu() {

    const navigate = useNavigate();
    const { logout } = useContext(UserContext);
    const token = localStorage.getItem('usertoken');



    const setMenu = () => {
        if (token) {
            return (
                <>
                    <li><Link to={'/'}>Főoldal</Link></li>
                    <li><Link to={'/userdata'}>Felhasználó adatai</Link></li>
                    <li><a onClick={() => { logout(); navigate('/') }}>Kijelentkezés</a></li>
                </>
            )
        } else {
            return (
                <>
                    <li><Link to={'/'}>Főoldal</Link></li>
                    <li><Link to={'/register'}>Regisztráció</Link></li>
                    <li><Link to={'/login'}>Bejelentkezés</Link></li>
                </>
            )
        }
    }



    return (
        <div>
            <ul className="menu menu-horizontal bg-base-100">
                {
                    setMenu()
                }



            </ul>
        </div>
    )
}

export default Menu


// var isThereToken = false;

//     useEffect(() => {

//         if (token) {
//             isThereToken = true;
//         } else {
//             isThereToken = false;
//         }

//     }, [token])



    // if (isThereToken) {
    //     return (
    //         <div>
    //             <ul className="menu menu-horizontal bg-base-100">
    //                 <li><Link to={'/'}>Felhasználó adatai</Link></li>
    //             </ul>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <ul className="menu menu-horizontal bg-base-100">
    //                 <li><Link to={'/'}>Felhasználó adatai</Link></li>
    //                 <li><Link to={'/register'}>Regisztráció</Link></li>
    //                 <li><Link to={'/login'}>Bejelentkezés</Link></li>
    //             </ul>
    //         </div>
    //     )
    // }