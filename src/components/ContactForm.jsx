//Importa componentes de react-bootstrap
import { Button, Form } from "react-bootstrap";
//Importa librería de sweetalert2
import Swal from "sweetalert2";

export const ContactForm = () => {
  return (
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
  );
};
