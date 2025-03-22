//Importa libreria de react
import PropTypes from "prop-types";
//Importa componentes de react-bootstrap
import { Button } from "react-bootstrap";
//Importa FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";  

export const RemoveButton = ({ onRemove }) => {
  return (
    <Button className="btn btn-secondary btn-sm" onClick={onRemove}>
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  );
};

RemoveButton.propTypes = {
  onRemove: PropTypes.func.isRequired,
};
