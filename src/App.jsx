// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Importa componente NavBar
import { NavBar } from "./components/NavBar";
//Importa estilos de App.css
import "./App.css";
//Importa estilos de styles.css
import "./styles/styles.css";
//Importa componente BrowserRouter, Routes y Route
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Importa componente Footer
import { TcsFooter } from "./components/TcsFooter";
//Importa componentes de las páginas
import { Inicio } from "./view/Inicio.jsx";
import { DetalleDeProducto } from "./view/DetalleDeProducto.jsx";
import { Ofertas } from "./view/Ofertas.jsx";
import { Ayuda } from "./view/Ayuda.jsx";
import { Error404 } from "./view/Error404.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/products/:id" element={<DetalleDeProducto />} />
          <Route path="/categoria/:categoriaId" element={<Inicio />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <TcsFooter />
    </>
  );
}

//Exporta componente App (principal - padre) al DOM
export default App;
