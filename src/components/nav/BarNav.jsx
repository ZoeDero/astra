import React from "react";
import "./barNav.scss";

import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import OffCanvas from "./OffCanvas";




const BarNav = () => {
    const route=useLocation()
    const [color, setColor]= useState("");
    useEffect(()=>{
      setColor(route.pathname.replace("/",""))//on enleve le slash pour pouvoir faire appel dans une className

    }, [route]);

  

  return (
    <>
    <nav id="navigation" className={`d-flex justify-content-center `} >
    
  
        <NavLink to="/" className={`${color}`}>
          Home
        </NavLink>
        <NavLink to="/twitch" className={`${color}`}>
          Twitch
        </NavLink>
        <NavLink to="/youtube"className={`${color}`} >
          Youtube
        </NavLink>
        {/* <NavLink to="/insta" className={`${color}`}>
          Instagram
        </NavLink> */}
        <NavLink to="/boutique " className={`${color}`}>
          Boutique
        </NavLink>
      
    </nav> 
      <div className='respNavBar container-fluid bg-dark'>
        <div className="container d-flex justify-content-around align-items-center m-auto">
          <NavLink to="/" className={`${color}`}>
            <i className="fa-solid fa-house fa-xl"></i>
          </NavLink>
          <NavLink to="/twitch" className={`${color}`}>
            <i class="fa-brands fa-twitch fa-xl"></i>
          </NavLink>
          <NavLink to="/youtube"className={`${color}`} >
            <i class="fa-brands fa-youtube fa-xl"></i>
          </NavLink>
          <NavLink to="/boutique " className={`${color}`}>
            <i class="fa-solid fa-cart-shopping fa-xl"></i>
          </NavLink>
          <OffCanvas/>
        </div>
       </div>
   </>
  );
};

export default BarNav;
