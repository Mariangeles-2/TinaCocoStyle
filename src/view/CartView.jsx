//Importa librería de react
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
//Importa componente de react-bootstrap
import Button from "react-bootstrap/Button";
//Importa formatear precio
import { formatearPrecio } from "../utils/formatearPrecios";
//Importa componente
import { CartItemList } from "../components/CartItemList";
//Importa Link de react-router-dom
import { Link } from "react-router-dom";

export const CartView = () => {
  const { cartList } = useContext(CartContext);
  return (
    <div className="container mt-4">
      <h1 className="tcs-titulo-mi-carrito mb-4">Mi carrito</h1>

      {cartList.length === 0 ? (
        <p className="text-muted mt-5">No hay productos en el carrito</p>
      ) : (
        <div className="d-flex">
          <div className="w-75">
            <CartItemList />
          </div>
          <div className="d-flex flex-column p-2 ms-3 border rounded">
            <h2 className="tcs-titulo-resumen">Resumen de compra</h2>
            <div className="d-flex mt-1 justify-content-between">
              <p>Productos</p>
              <div className="mt-2">
                {cartList.reduce((acc, item) => acc + item.quantity, 0)}{" "}
              </div>
            </div>
            <div className="d-flex mt-1 justify-content-between">
              <p>Envío</p>
              <p className="text-success me-0">Gratis</p>
            </div>
            <div className="d-flex mt-1 justify-content-between">
              <h3 className="tcs-titulo-total m-2">Total</h3>
              <div className="my-2">
                {formatearPrecio(
                  cartList.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )
                )}
              </div>
            </div>
            <div className="d-flex mt-3 justify-content-between">
              <Button className="btn btn-secondary btn-sm" as={Link} to="/">
                Seguir comprando
              </Button>
              <Button className="btn btn-secondary ms-2 btn-sm">
                Finalizar compra
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
