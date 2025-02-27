//Importa librería de react-bootstrap
import { Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

export const Error404 = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <h1>Error</h1>
            <div>
                <p>4</p>
                <img src="../assets/img/tcs-error-404.png" alt="Error 404" />
                <p>4</p>
            </div>
            <p>¡Oops! Esta página se ha escapado en una ola de cocos.</p>
            <button onClick={() => navigate("/")}>Regresemos al bazar.</button>
        </Container>
    );
};
