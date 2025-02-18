// Importa librerías de react-bootstrap
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PropTypes from 'prop-types';

//Exporta componente ItemListContainer al DOM
export const ItemListContainer = (props) => (
  <Container className="p-5">
    <Row xs={1} md={3} className="g-5">
      {props.articulos.map((articulo) => (
        <Col key={articulo.id}>
          <Card>
            <Card.Img variant="top" src={articulo.image} />
            <Card.Body>
              <Card.Title>{articulo.name}</Card.Title>
              <Card.Text>$ {articulo.price}</Card.Text>
            </Card.Body>
          </Card>
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
