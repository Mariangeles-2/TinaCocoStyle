//Importa libreria de react
import { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
//Importa contexto
import { CartContext } from "../contexts/CartContext";
//Importa librería de react-bootstrap
import Button from "react-bootstrap/Button";
//Importa Link de react-router-dom
import { Link } from "react-router-dom";

export const CartSidebar = () => {
  const { showCartSidebar, setShowCartSidebar } = useContext(CartContext);
  const handleClose = () => setShowCartSidebar(false);
  return (
    <Offcanvas show={showCartSidebar} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
        <Button
          variant="secondary"
          as={Link}
          to="/carrito"
          onClick={handleClose}
        >
          Ver mi carrito
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
