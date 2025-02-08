import PropTypes from 'prop-types';

export const ItemListContainer = (props) => (
  <h1 className="mt-5"> {props.saludo} </h1>
);

ItemListContainer.propTypes = {
  saludo: PropTypes.string.isRequired,
};
