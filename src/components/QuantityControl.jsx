//Import componentes de react
import { Button } from "react-bootstrap";
//Importa PropTypes
import PropTypes from "prop-types";
//Importa useContext
import { useContext } from "react";
//Importa contexto de CartContext
import { CartContext } from "../contexts/CartContext";

export const QuantityControl = ({ item }) => {
  const { updateQuantity } = useContext(CartContext);
  const onIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  const onDecrease = () => {
    updateQuantity(item.id, item.quantity - 1);
  };
  const onChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="d-flex align-items-center">
      <Button className="btn btn-secondary btn-sm m-1" onClick={onDecrease}>
        -
      </Button>
      <input
        type="number"
        className="form-control mx-s quantity-input"
        value={item.quantity}
        onChange={(e) => onChange(Number(e.target.value))}
        min="1"
      />
      <Button className="btn btn-secondary btn-sm m-1" onClick={onIncrease}>
        +
      </Button>
    </div>
  );
};

QuantityControl.propTypes = {
  item: PropTypes.object.isRequired,
};
