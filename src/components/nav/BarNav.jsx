import React from "react";
import "./barNav.scss";

import { NavLink } from "react-router-dom";




const BarNav = (setColor) => {
  return (
   
    <nav id="navigation" className="d-flex justify-content-center">
    
   
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/twitch">
          <li>Twitch</li>
        </NavLink>
        <NavLink to="/youtube">
          <li>Youtube</li>
        </NavLink>
        <NavLink to="/insta">
          <li>Instagram</li>
        </NavLink>
        <NavLink to="/boutique">
          <li>Boutique</li>
        </NavLink>
        
      
   
      
    </nav> 
  );
};

export default BarNav;
