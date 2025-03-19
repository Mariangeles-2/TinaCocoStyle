//Importa librería de react
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
//Importa función para obtener URL de imagen
import { obtenerURLImagen } from "../utils/obtenerURLImagen";

export const CartView = () => {
  const { cartList } = useContext(CartContext);
  return (
    <div>
      <h1>Mi carrito</h1>

      {cartList.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div className="d-flex flex-column container">
          {cartList.map((item) => (
            <div key={item.id} className="d-flex align-items-center mb-2">
              <img
                className="tcs-img-item"
                src={obtenerURLImagen(item.image)}
                alt=""
              />
              {item.name} - ${item.price} x {item.quantity}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
