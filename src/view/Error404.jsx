//Importa librería de react-bootstrap
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
//Importa imagen de error 404
import tcsError404Logo from "../assets/img/tcs-error404-logo.png";
//Importa link
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <Container>
      <div>
        <h1 className="tcs-error404-titulo">Error</h1>
        <div>
          <div className="d-flex justify-content-center align-items-center">
            <p className="tcs-error404">4</p>
            <img
              src={tcsError404Logo}
              alt="Error 404"
              className="tcs-error404-logo"
            />
            <p className="tcs-error404">4</p>
          </div>
        </div>
        <p>¡Oops! Esta página se ha escapado en una ola de cocos.</p>
        <Button variant="secondary" as={Link} to="/">
          Regresemos al bazar.
        </Button>
      </div>
    </Container>
  );
};
