import React from "react";
import "./barNav.scss";

import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";




const BarNav = () => {
    const route=useLocation()
    const [color, setColor]= useState("");
    useEffect(()=>{
      setColor(route.pathname.replace("/",""))//on enleve le slash pour pouvoir faire appel dans une className

    }, [route]);

  

  return (
   
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
  );
};

export default BarNav;
