import React from "react";
import "./barNav.scss";
import Nav from "react-bootstrap/Nav";

const BarNav = () => {
  return (
    <Nav id="nav-head"
      activeKey="/home"
      
    >
      <Nav.Item class="nav-item-head">
        <Nav.Link href="/home">A propos</Nav.Link>
      </Nav.Item>
      <Nav.Item class="nav-item-head">
        <Nav.Link href="/" >Twitch</Nav.Link>
      </Nav.Item >
      <Nav.Item class="nav-item-head">
        <Nav.Link  href="/home" >Youtube</Nav.Link>
      </Nav.Item>
      <Nav.Item class="nav-item-head">
        <Nav.Link href="/home" eventKey="Suis moi sur insta pour voir mes dernières créations">Insta</Nav.Link>
      </Nav.Item>
      <Nav.Item class="nav-item-head">
        <Nav.Link  href="/home" eventKey="Envie de représenter la commu où besoin d'un overlay ?">Shop</Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
};

export default BarNav;
