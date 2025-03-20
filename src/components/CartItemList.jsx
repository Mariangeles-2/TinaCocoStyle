//Importa utilidades
import { obtenerURLImagen } from "../utils/obtenerURLImagen";
import { formatearPrecio } from "../utils/formatearPrecios";
//Importa contexto
import { CartContext } from "../contexts/CartContext";
//Importa librería de react
import { useContext } from "react";

export const CartItemList = () => {
  const { cartList } = useContext(CartContext);
  return (
    <div className="d-flex flex-column me-1">
      {cartList.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center mb-3 p-2 border rounded"
        >
          <img
            className="tcs-img-item mr-3"
            src={obtenerURLImagen(item.image)}
            alt={item.name}
          />
          <div className="flex-grow-1 ms-2">
            <div>{item.name}</div>
            <div className="text-muted">
              {formatearPrecio(item.price)} x {item.quantity}
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};
