//Importa validacion de PropTypes
import PropTypes from 'prop-types';

//Exporta componente ItemListContainer
export const ItemListContainer = (props) => (
  <h1 className="mt-5"> {props.saludo} </h1>
);

ItemListContainer.propTypes = {
  saludo: PropTypes.string.isRequired,
};
