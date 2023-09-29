import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';


export default function Task04(){
    return(
        <div className="Task04">
            <div>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </div>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/products/:id" element={<ProductDetail/>}/>
            </Routes>
        </div>
    );
}