//Importa utilidades
import { getImageURL } from "../utils/getImageURL";
import { formatPrice } from "../utils/formatPrice";
import { CartContext } from "../contexts/CartContext";
//Importa librería de react
import { useContext } from "react";
//Importa componente
import { QuantityControl } from "../components/QuantityControl";
import { RemoveButton } from "./RemoveButton";

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
            src={getImageURL(item.image)}
            alt={item.name}
          />
          <div className="w-75">
            <div className="flex-grow-1 ms-2">
              <div>{item.name}</div>
              <div className="text-muted">
                {formatPrice(item.price)} x {item.quantity}
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center ">
            <QuantityControl item={item} />
            <RemoveButton itemId={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};
