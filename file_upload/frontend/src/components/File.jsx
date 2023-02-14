import React from 'react'

function File({ path }) {
    // console.log(path)
    return (
        <img src={path} className="img-fluid" alt="szia" />
    )
}

export default File