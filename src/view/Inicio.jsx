//Importa librería de react
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Importa componentes
import { ItemListContainer } from "../components/ItemListContainer";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { fetchArticulos } from "../utils/cargarArticulos";

export const Inicio = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true); // Restablece el estado de carga a true cada vez que cambia la categoría

    const timer = setTimeout(() => {
      fetchArticulos(categoriaId)
        .then((arts) => setArticulos(arts))
        .finally(() => setLoading(false));
    }, 3000);

    return () => clearTimeout(timer);
  }, [categoriaId]);

  return (
    <>
      <LoadingSpinner loading={loading} />
      {!loading && <ItemListContainer articulos={articulos} />}
    </>
  );
};
