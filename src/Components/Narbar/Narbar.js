import {React, NavDropdown,Navbar,Container, Nav} from "react-bootstrap";
import { Link, } from "react-router-dom";


export const NavBar = () => {
  return (
  <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img id="menu" class="logo" src="https://w7.pngwing.com/pngs/568/379/png-transparent-technology-computer-icons-technology-electronics-text-logo.png"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link ><Link to ="/">INICIO</Link></Nav.Link>
        <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
          <NavDropdown.Item><Link to ="/category/motherBoard/"> MOTHERBOARDS</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item><Link to ="/category/videoTarjet/"> TARJETAS DE VIDEO</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link><Link to ="/mi-carrito">MI CARRITO</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
};
