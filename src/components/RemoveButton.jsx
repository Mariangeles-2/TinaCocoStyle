//Importa libreria de react
import PropTypes from "prop-types";
//Importa componentes de react-bootstrap
import { Button } from "react-bootstrap";
//Importa FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
//Importa useContext
import { useContext } from "react";
//Importa contexto de CartContext
import { CartContext } from "../contexts/CartContext";

export const RemoveButton = ({ itemId }) => {
  const { deleteItem } = useContext(CartContext);
  const onRemove = () => {
    deleteItem(itemId);
  };

  return (
    <Button className="btn btn-secondary btn-sm" onClick={onRemove}>
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  );
};

RemoveButton.propTypes = {
  itemId: PropTypes.string.isRequired,
};
