import React, { useState, useEffect, createContext } from 'react';
import Notify from '../../Toasts';

const UserContext = createContext();




export const UserProvider = ({ children }) => {


    const [Refresh, setRefresh] = useState(false);

    const update = () => {
        setRefresh(prev => !prev);
    }


    const logout = () => {
        sessionStorage.removeItem('usertoken');
        update();
        Notify.tSuccess("Kijelentkezve");
    }



    return <UserContext.Provider value={{
        Refresh, update,
        logout

    }}>{children}</UserContext.Provider>
};

export default UserContext;