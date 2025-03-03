//Importa librería de react-bootstrap
import { Container } from "react-bootstrap";
//Importa componentes de react-bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//Importa librería de sweetalert2
import Swal from "sweetalert2";

export const Ayuda = () => {
  return (
    <Container className="ontainer-fluid my-5">
      <h2 className="display-6 text-center mb-5">¡Tu opinión nos importa!</h2>
      <div className="d-flex flex-column flex-xl-row align-items-center">
        <div className="w-50">
          <h3>¡Gracias por confiar en nosotros!</h3>
          <p>
            En TinaCoco Style, nos dedicamos a brindar el mejor servicio posible
            y para ello, necesitamos tu ayuda. Si tienes alguna pregunta, duda o
            sugerencia, no dudes en dejarnos tu consulta.
          </p>
          <p>
            Nuestro equipo está aquí para escucharte y ofrecerte la información
            que necesites. Completa el formulario a continuación y te
            responderemos lo antes posible.
          </p>
        </div>
        <Form className="w-50">
          <Form.Group className="mb-3" controlId="nombreForm">
            <Form.Control type="name" placeholder="Tu nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailForm">
            <Form.Control type="email" placeholder="Tu email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="mensajeForm">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Como podemos ayudarte?"
            />
          </Form.Group>
          <Button
            onClick={() => {
              Swal.fire({
                title: "Tu mensaje ha sido enviado",
                text: "¡Gracias por confiar en nosotros!",
                icon: "success",
                showConfirmButton: false,
                timer: 2500,
              });
            }}
            variant="secondary"
          >
            Enviar
          </Button>
        </Form>
      </div>
    </Container>
  );
};
