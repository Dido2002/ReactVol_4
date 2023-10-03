import React from "react";

import {useParams} from 'react-router-dom';

export default function ProductDetail(){
    const {id} = useParams();

    return(
        <div>
            <h1>{`Product ${id}`}</h1>
            <p>{id * 10}</p>
            <p>Id: {id}</p>
        </div>
    )
}