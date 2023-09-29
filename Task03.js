import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';


export default function Task03(){
    return(
        <div className="Task03">
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </div>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="about"  element={<About/>}/>
                <Route element={<PrivateRoute isLogged={true}/>}>
                    <Route path="contacts"  element={<Contacts/>}/>
                </Route>

            </Routes>
        </div>
    )
}