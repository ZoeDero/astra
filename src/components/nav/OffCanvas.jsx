import "./offcanvas.css";
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import { Offcanvas } from "react-bootstrap";
import {AiOutlineMenu} from "react-icons/ai"
import {NavLink} from "react-router-dom";







const OffCanvas = () => {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
        <div>
             <>
      <Button variant="bg-none text-light " onClick={handleShow} className="btn-menu bg-none border-0 fa-2xl">
      <AiOutlineMenu/>
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="bg-dark">
        <Offcanvas.Header closeButton ></Offcanvas.Header>
   
          <Offcanvas.Title className="text-warning text-center">Connexion</Offcanvas.Title>
        
        
        <Offcanvas.Body>
        <form className="">
         <input type="" placeholder="E-mail" className="input w-100 rounded-2 bg-dark text-white m-2  text-center"/>
         <input type="" placeholder="Password" className="input w-100 rounded-2 bg-dark text-white m-2  text-center"/>
        </form>
        <button type="submit" className="btn-connexion bg-warning rounded-2 border-0">GO</button>
      

        </Offcanvas.Body>
        <hr/>
        <Offcanvas.Title className="text-warning text-center">Register</Offcanvas.Title>
       
      
        <Offcanvas.Body>
        <form className="container-fluid ">
         <input type="" placeholder="Entrez une adresse mail" className="input w-100 rounded-2 bg-dark text-white m-2  text-center"/>
         <input type="" placeholder="Entrez un pseudo" className="input w-100 rounded-2 bg-dark text-white m-2  text-center"/>
         <input type="" placeholder="Entrez un mot de passe" className="input w-100 rounded-2 bg-dark text-white m-2  text-center"/>
         <input type="" placeholder="Entrez à nouveau le mot de passe" className="input w-100 rounded-2 bg-dark text-white m-2  text-center"/>
        </form>
        <button type="submit" className="btn-register bg-warning rounded-2 border-0">GO</button>
       
        
        </Offcanvas.Body>
      </Offcanvas>
    </>
        </div>
    );
};

export default OffCanvas;