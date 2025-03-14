//Importa libreria de react
import { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
//Importa contexto
import { ShowCardSidebarContext } from "../contexts/ShowCardSidebarContext";

export const CartSidebar = () => {
    const {showCartSidebar, setShowCartSidebar} = useContext(ShowCardSidebarContext);
    const handleClose = () => setShowCartSidebar(false);
  return (
      <Offcanvas show={showCartSidebar} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
  );
}
