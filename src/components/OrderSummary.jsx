//Importa contexto
import { CartContext } from "../contexts/CartContext";
//Importa librería de react
import { useContext } from "react";

export const OrderSummary = () => {
    const { cartList, getFormattedTotalPrice } = useContext(CartContext);
  return (
    <>
      <div className="d-flex mt-1 justify-content-between">
        <p>Articulos</p>
        <div className="mt-2">
          {cartList.reduce((acc, item) => acc + item.quantity, 0)}{" "}
        </div>
      </div>
      <div className="d-flex mt-1 justify-content-between">
        <p>Envío</p>
        <p className="text-success me-0">Gratis</p>
      </div>
      <div className="d-flex mt-1 justify-content-between">
        <h3 className="tcs-total-title m-2">Total</h3>
        <div className="my-2">
          {getFormattedTotalPrice()}
        </div>
      </div>
    </>
  );
};
