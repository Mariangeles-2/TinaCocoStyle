import { CartWidget } from "./CartWidget";
import bannerImagen from "../assets/img/banner.png";

export const NavBar = () => (
  <div className="container">

    <CartWidget />

    <img className="start-banner img-fluid" src={bannerImagen} />

    <nav className="navbar navbar-expand-lg tcs-navbar">
      <div className="container-fluid">
        <div id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Productos
            </a>
            <a className="nav-link" href="#">
              Nosotros
            </a>
            <a className="nav-link" href="#">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
);
