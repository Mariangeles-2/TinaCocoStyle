//Importa librería de react-bootstrap
import { BarLoader } from "react-spinners";
//Importa PropTypes
import PropTypes from "prop-types";

export const LoadingSpinner = ({ loading }) => (
  <BarLoader
    className="position-relative my-5 top-50 start-50 translate-middle"
    color="#757575"
    width={200}
    loading={loading}
  />
);

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};
