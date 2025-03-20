//Importa libreria de react
import { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
//Importa contexto
import { CartContext } from "../contexts/CartContext";
//Importa librería de react-bootstrap
import Button from "react-bootstrap/Button";
//Importa Link de react-router-dom
import { Link } from "react-router-dom";
//Importa componente
import { CartItemList } from "./CartItemList";

export const CartSidebar = () => {
  const { showCartSidebar, setShowCartSidebar } = useContext(CartContext);
  const handleClose = () => setShowCartSidebar(false);
  const { cartList } = useContext(CartContext);

  return (
    <Offcanvas show={showCartSidebar} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="tcs-titulo-mi-carrito">
          Mi carrito
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartList.length === 0 ? (
          <p className="text-muted mt-5">No hay productos en el carrito</p>
        ) : (
            <CartItemList />
        )}
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
