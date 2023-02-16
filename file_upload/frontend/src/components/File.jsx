import React, { useState, useEffect } from 'react';

function File({ path }) {
    // console.log(path)

    const [url, setUrl] = useState(null);

    const fetchImg = async (from) => {
        await fetch("http://localhost:8000/api/files/" + from)
            .then(res => res.json())
            .then(data => setUrl(data))
            .catch(err => console.log(err));

    }


    // useEffect(() => {
    //     !url && fetchImg(path);
    // })

    return (
        <img src={url && fetch("http://localhost:8000/api/files/" + url[0].path)[0].path} className="img-fluid" alt="szia" />

    )
}

export default File