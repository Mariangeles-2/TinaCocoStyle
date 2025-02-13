// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Importa componente NavBar
import { NavBar } from "./components/NavBar";
//Importa componente ItemListContainer
import { ItemListContainer } from "./components/ItemListContainer";
//Importa estilos de App.css
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Bienvenido!" />
    </>
  );
}

//Exporta componente App (principal - padre) al DOM
export default App;
