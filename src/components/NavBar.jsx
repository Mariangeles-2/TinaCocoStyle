//Importa componente CartWidget
import { CartWidget } from "./CartWidget";
//Importa componentes para Navbar Bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//Importa imagen
import tcsLogo from "../assets/img/tcs-logo.png";
//Importa estilos de NavBar.css
import "../styles/styles.css";

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
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#dormitorio">Dormitorio</NavDropdown.Item>
              <NavDropdown.Item href="#cocina">Cocina</NavDropdown.Item>
              <NavDropdown.Item href="#bano">Baño</NavDropdown.Item>
              <NavDropdown.Item href="#aireLibre">Aire Libre</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#ayuda">Ayuda</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);
