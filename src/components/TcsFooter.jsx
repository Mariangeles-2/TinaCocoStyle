//Importa imagen
import tcsLogoConNombre from "../assets/img/tcs-logo-con-nombre.png";

export const TcsFooter = () => (
  <footer className="p-1 tcs-footer sticky-footer">
    <div className="d-flex flex-wap justify-content-around">
      <div className="d-flex flex-column align-items-center w-25">
        <img
          src={tcsLogoConNombre}
          alt="TinaCoco Style Logo"
          className="tcs-logo-with-name-footer justify-content-center"
        />
        <p className="text-center">
          Ofrecemos artículos de bazar de calidad, combinando diseño y
          funcionalidad para cada espacio del hogar.
        </p>
      </div>
      <div className="w-25">
        <h3>Contacto</h3>
        <p>Av. Santa Fe 742, Buenos Aires</p>
        <p>Horario de atención: Lunes a Viernes de 9 a 18 hs.</p>
        <p>Teléfono: 011-1234-5678</p>
      </div>
      <div className="w-25">
        <h3>Redes Sociales</h3>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
    </div>
    <p>&copy; 2021 - All rights reserved</p>
  </footer>
);
