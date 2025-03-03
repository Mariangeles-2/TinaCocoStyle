// Importa librerías de react-bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
//Importa formatearPrecio
import { formatearPrecio } from "../utils/formatearPrecios";
//Importa URL para imagenes
import { obtenerURLImagen } from "../utils/obtenerURLImagen";

//Exporta componente ItemListContainer al DOM
export const ItemListContainer = (props) => (
  <Container className="p-5">
    <Row xs={1} md={3} className="g-5">
      {props.articulos.map((articulo) => (
        <Col key={articulo.id}>
          <Link
            className="text-decoration-none"
            to={`/products/${articulo.id}`}
          >
            <Card>
              <Card.Img
                variant="top"
                //Copiado en StackOverflow ya que no me redireccionaba bien la imagen
                src={obtenerURLImagen(articulo.image)}
              />
              <Card.Body>
                <Card.Title>{articulo.name}</Card.Title>
                <Card.Text>{formatearPrecio(articulo.price)}</Card.Text>
                <Button
                  variant="secondary"
                  onClick={(e) => {
                    //Para detener el fuincionamiento del link
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  </Container>
);

ItemListContainer.propTypes = {
  articulos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ItemListContainer;
