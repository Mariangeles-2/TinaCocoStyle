// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Importa componente NavBar
import { NavBar } from "./components/NavBar";
//Importa componente ItemListContainer
import { ItemListContainer } from "./components/ItemListContainer";
//Importa estilos de App.css
import "./App.css";
//Importa estilos de styles.css
import "./styles/styles.css";
//Importa Hook useEffect y useState
import { useEffect, useState } from "react";
//Importa componente CircleLoader
import { BarLoader } from "react-spinners";
//Importa componente Footer
import { TcsFooter } from "./components/TcsFooter";

function App() {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => fetchArticulos().finally(() => setLoading(false)),
      3000
    );

    return () => clearTimeout(timer);
  }, []);

  const fetchArticulos = () =>
    fetch("json/articulos.json")
      .then((response) => response.json())
      .then((data) => setArticulos(data));

  return (
    <>
      <NavBar />
      <BarLoader
        className="position-absolute top-50 start-50 translate-middle"
        color="#757575"
        width={200}
        loading={loading}
      />

      {!loading && (
        <>
          <ItemListContainer articulos={articulos} />
          <TcsFooter />
        </>
      )}
    </>
  );
}

//Exporta componente App (principal - padre) al DOM
export default App;
