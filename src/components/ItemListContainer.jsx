// Importa librerías de react-bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
//Importa formatPrice
import { formatPrice } from "../utils/formatPrice";
//Importa URL para imagenes
import { getImageURL } from "../utils/getImageURL";
//Importa contexto de CartContext
import { CartContext } from "../contexts/CartContext";
//Importa useContext de react
import { useContext } from "react";

//Exporta componente ItemListContainer al DOM
export const ItemListContainer = (props) => {
  const { addToCart } = useContext(CartContext);

  return (
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
                  src={getImageURL(articulo.image)}
                />
                <Card.Body>
                  <Card.Title>{articulo.name}</Card.Title>
                  <Card.Text>{formatPrice(articulo.price)}</Card.Text>
                  <Button
                    variant="secondary"
                    onClick={(e) => {
                      //Para detener el fuincionamiento del link
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(articulo, 1);
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
};

ItemListContainer.propTypes = {
  articulos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ItemListContainer;
