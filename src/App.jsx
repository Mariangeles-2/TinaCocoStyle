// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Importa componente NavBar
import { NavBar } from "./components/NavBar";
//Importa componente CartSidebar
import { CartSidebar } from "./components/CartSidebar";
//Importa estilos de App.css
import "./App.css";
//Importa estilos de styles.css
import "./styles/styles.css";
//Importa componente BrowserRouter, Routes y Route
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Importa componente Footer
import { TcsFooter } from "./components/TcsFooter";
//Importa componentes de las páginas
import { Home } from "./view/Home.jsx";
import { ArticleDetail } from "./view/ArticleDetail.jsx";
import { Help } from "./view/Help.jsx";
import { Error404 } from "./view/Error404.jsx";
import { CartContextProvider } from "./contexts/providers/CartContextProvider.jsx";
import { CartView } from "./view/CartView.jsx";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <div className="d-flex flex-column min-vh-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<ArticleDetail />} />
              <Route path="/categorias/:categoriaId" element={<Home />} />
              <Route path="/help" element={<Help />} />
              <Route path="/carrito" element={<CartView />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
          <CartSidebar />
        </BrowserRouter>
      </CartContextProvider>
      <TcsFooter />
    </>
  );
}

//Exporta componente App (principal - padre) al DOM
export default App;
