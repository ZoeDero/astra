import "./offcanvas.css";
import React, {useState, useContext} from "react";
import Button from "react-bootstrap/Button";
import { Offcanvas } from "react-bootstrap";
import {AiOutlineMenu} from "react-icons/ai"
import {NavLink} from "react-router-dom";
import { useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { navigate } from "react";






const OffCanvas = () => {

    const{setAuth}=useContext(AuthContext);
    const [valid, setValid]=useState({email:false, password:false});
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const validForm = (jsonData) => {

  
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(document.getElementById("log-form"));
        const jsonData = Object.fromEntries(formData.entries()); 
        console.log(jsonData);
        fetch('http://astra-api/auth/login', {
            method: "POST",
            body: JSON.stringify(jsonData)
        }).then(resp => resp.json())
        .then(json => {
            console.log(json);
            if (json.result){
                setAuth({role:json.role});
                navigate('/homescreen');
            }
            else{
                setAuth({role:0});
            }
        })
    // }

    }

    

    
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
        <form className="bg-dark" id="log-form" onClick={handleSubmit} >
        <div>
         <label htmlFor="email-input"  className="form-label input w-100 rounded-2 bg-dark text-white m-2  text-center">
        </label>
         <input type="email" name="login" placeholder="E-mail" id="email-input" className="form-control input w-100 rounded-2 bg-dark text-white m-2  text-center"/>
        </div>
        <div>
         <label htmlFor="email-input"  className="form-label input w-100 rounded-2 bg-dark text-white m-2  text-center">
        </label>
         <input type="password" name="password" placeholder="Password" id="password-input" className="form-control input w-100 rounded-2 bg-dark text-white m-2  text-center"/>
        </div>
        <button type="submit" className="btn-connexion bg-warning rounded-2 border-0">GO</button>
        </form>

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