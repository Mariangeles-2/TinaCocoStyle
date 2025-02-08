import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => (
  <div className="d-flex justify-content-end">
    <FontAwesomeIcon icon={faCartShopping} className="me-2" />
    <span>0</span>
  </div>
);
