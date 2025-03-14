//Importa libreria de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Importa icono de FontAwesome
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
//Importa useContext de react
import { useContext } from "react";
//Importa librería de react-bootstrap
import { Button } from "react-bootstrap";
//Importa contexto
import { ShowCardSidebarContext } from "../contexts/ShowCardSidebarContext";

export const CartWidget = () => {
  const { setShowCartSidebar } = useContext(ShowCardSidebarContext);
  const handleShow = () => setShowCartSidebar(true);
  return (
    <div className="d-flex justify-content-end me-5">
      <Button
        variant="link"
        className="text-decoration-none text-dark"
        onClick={handleShow}
      >
        <FontAwesomeIcon icon={faCartShopping} className="me-2" />
        <span>0</span>
      </Button>
    </div>
  );
};
