//Import componentes de react
import { Button } from "react-bootstrap";
//Importa PropTypes
import PropTypes from "prop-types";

export const QuantityControl = ({
  quantity,
  onIncrease,
  onDecrease,
  onChange,
}) => {
  return (
    <div className="d-flex align-items-center">
      <Button className="btn btn-secondary btn-sm m-1" onClick={onDecrease}>
        -
      </Button>
      <input
        type="number"
        className="form-control mx-s quantity-input"
        value={quantity}
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
  quantity: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
