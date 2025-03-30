//Importa componente CartWidget
import { CartWidget } from "./CartWidget";
//Importa componentes para Navbar Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//Importa imagen
import tcsLogo from "../assets/img/tcs-logo.png";
//Importa navLink
import { NavLink } from "react-router-dom";

//Exporta componente NavBar al DOM
export const NavBar = () => (
  <>
    <CartWidget />

    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={tcsLogo}
            className="d-inline-block align-top tcs-logo-navbar"
            alt="TinaCoco Style Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-75 d-flex justify-content-around">
            <Nav.Link as={NavLink} to="/" className="nav-title">
              Inicio
            </Nav.Link>
            <NavDropdown
              title="Categorías"
              id="basic-nav-dropdown"
              className="nav-title"
            >
              <NavDropdown.Item as={NavLink} to="/categorias/dormitorio">
                Dormitorio
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categorias/cocina">
                Cocina
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categorias/bano">
                Baño
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categorias/aire-libre">
                Aire Libre
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/help" className="nav-title">
              Ayuda
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);
