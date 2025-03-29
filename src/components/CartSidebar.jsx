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
//Importa formatear precio
import { formatPrice } from "../utils/formatPrice";

export const CartSidebar = () => {
  const { showCartSidebar, setShowCartSidebar } = useContext(CartContext);
  const handleClose = () => setShowCartSidebar(false);
  const { cartList } = useContext(CartContext);

  return (
    <Offcanvas show={showCartSidebar} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="tcs-my-car-title">
          Mi carrito
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column justify-content-between">
        {cartList.length === 0 ? (
          <p className="text-muted mt-5">No hay articulos en el carrito</p>
        ) : (
          <CartItemList />
        )}
        <div>
          <div className="d-flex mt-1 justify-content-between">
            <h3 className="tcs-total-title m-2">Total</h3>
            <div className="my-2">
              {formatPrice(
                cartList.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )
              )}
            </div>
          </div>
          <Button
            variant="secondary"
            as={Link}
            to="/carrito"
            onClick={handleClose}
          >
            Ver mi carrito
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
