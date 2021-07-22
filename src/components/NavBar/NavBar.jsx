import React from 'react';
import imglogo from '../../assets/img/paginainicio.jpeg'
import { Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

export default function NavBar() {
return (
    
<div>
<Navbar bg="none" expand="sm">
  <Container>
    <Navbar.Brand href="#home"><img src={imglogo} alt="logo" /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="Bebés" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">0 a 3 meses</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">6 a 9 meses</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">9 a 12 meses</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Niñas" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">2T</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">3T</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">4T</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">5T</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Niños" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">2T</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">3T</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">4T</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">5T</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Ofertas" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Bebés</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Niñas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Contacto</Nav.Link>
        <CartWidget/>
      </Nav>
    </Navbar.Collapse>
  </Container>
  
</Navbar>
</div>

)
}