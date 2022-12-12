import React from 'react';
import OffCanvas from '../nav/OffCanvas';
import './headerLogged.css';


const HeaderLogged = () => {
    
    fetch('http://astra-api/auth/login/e_mail', {
    method: "GET",
    body: JSON.stringify()})
    .then(resp => resp.json())
    .then(json => {
    console.log(json)});


    return (
        <div id="header-logged" className="container-fluid d-flex">
           <p> Bienvenue </p>
            <OffCanvas/>
        </div>
    );
};

export default HeaderLogged;