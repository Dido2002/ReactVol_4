import React from "react";
import {Link} from 'react-router-dom';

export default function ProductList(){
    const products = [
        {id:1, name: 'Product 1', price: 10},
        {id:2, name: 'Product 2', price: 20},
        {id:3, name: 'Product 3', price: 30}
    ];

    return(
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(p => (
                    <li key={p.id}>
                        <Link to={`/products/${p.id}`}>
                            {p.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}