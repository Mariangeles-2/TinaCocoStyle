import { Container } from "react-bootstrap";

export const Ayuda = () => {
  return (
    <Container className="ontainer-fluid my-4">
      <h2 className="display-6 text-center mb-5">¡Tu opinión nos importa!</h2>
      <div className="d-flex flex-column flex-xl-row align-items-center">
        <div className="w-75">
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
      </div>
    </Container>
  );
};
