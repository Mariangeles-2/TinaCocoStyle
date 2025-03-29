//Importa librería de react
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
//Importa componente de react-bootstrap
import Button from "react-bootstrap/Button";
//Importa componente
import { CartItemList } from "../components/CartItemList";
//Importa Link de react-router-dom
import { Link } from "react-router-dom";
//Importa componente
import { ShippingDataForm } from "../components/ShippingDataForm";
import { OrderSummary } from "../components/OrderSummary";

export const CartView = () => {
  const { cartList } = useContext(CartContext);
  return (
    <div className="container mt-4">
      <h1 className="tcs-my-car-title mb-4">Mi carrito</h1>
      {cartList.length === 0 ? (
        <p className="text-muted mt-5">No hay articulos en el carrito</p>
      ) : (
        <div className="d-flex">
          <div className="w-75">
            <CartItemList />
          </div>
          <div className="d-flex flex-column w-25">
            <div className="d-flex flex-column p-2 ms-3 border rounded mb-3">
              <h2 className="tcs-resum-title">Resumen de compra</h2>
              <OrderSummary />
              <Button className="btn btn-secondary btn-sm" as={Link} to="/">
                Seguir comprando
              </Button>
            </div>
            <div className="d-flex flex-column p-2 ms-3 border rounded mb-3">
              <h2 className="tcs-resum-title">Datos de envío</h2>{" "}
              <ShippingDataForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
