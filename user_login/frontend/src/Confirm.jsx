import React, { useContext, useState } from 'react'
import ImageContext from './comp/context/ImageContext';

function Confirm() {

    const {
        setDeleteModalOpen
    } = useContext(ImageContext);



    return (
        <div className='w-44, bg-sky-100' style={{
            position: "fixed",
            bottom:"5rem"
        }}>

            <div>
                <p className='text-2xl'>Biztosan törli?</p>
                <button onClick={() => { setDeleteModalOpen(false); }} className='btn btn-primary'>Nem</button>
                <button onClick={() => { setDeleteModalOpen(false); }} className='btn btn-error-content'>Igen</button>
            </div>


        </div>

    )
}

export default Confirm