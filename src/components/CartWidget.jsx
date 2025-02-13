//Importa libreria de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Importa icono de FontAwesome
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => (
  <div className="d-flex justify-content-end me-5">
    <FontAwesomeIcon icon={faCartShopping} className="me-2" />
    <span>0</span>
  </div>
);
