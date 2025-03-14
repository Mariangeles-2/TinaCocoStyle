// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Importa componente NavBar
import { NavBar } from "./components/NavBar";
//Importa componente CartSidebar
import { CartSidebar } from "./components/CartSidebar";
//Importa contexto de ShowCardSidebarContext
import { ShowCardSidebarContext } from "./contexts/ShowCardSidebarContext";
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
import { Ayuda } from "./view/Ayuda.jsx";
import { Error404 } from "./view/Error404.jsx";
import { useState } from "react";

function App() {
  const [showCartSidebar, setShowCartSidebar] = useState(false);

  return (
    <>
      <ShowCardSidebarContext.Provider value={{showCartSidebar, setShowCartSidebar}}>
        <BrowserRouter>
          <NavBar />
          <div className="d-flex flex-column min-vh-100">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/products/:id" element={<DetalleDeProducto />} />
              <Route path="/categorias/:categoriaId" element={<Inicio />} />
              <Route path="/ayuda" element={<Ayuda />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </BrowserRouter>
        <CartSidebar />
      </ShowCardSidebarContext.Provider>
      <TcsFooter />
    </>
  );
}

//Exporta componente App (principal - padre) al DOM
export default App;
