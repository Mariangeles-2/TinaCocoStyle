//Importa librería de react
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Importa componentes
import { ItemListContainer } from "../components/ItemListContainer";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { fetchArticles } from "../utils/articleUtils";

const categories = {
  dormitorio: "Dormitorio",
  cocina: "Cocina",
  bano: "Baño",
  "aire-libre": "Aire Libre",
};

export const Home = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true); // Restablece el estado de carga a true cada vez que cambia la categoría

    const timer = setTimeout(() => {
      fetchArticles(categoriaId)
        .then((arts) => setArticulos(arts))
        .finally(() => setLoading(false));
    }, 3000);

    return () => clearTimeout(timer);
  }, [categoriaId]);

  return (
    <>
      <LoadingSpinner loading={loading} />
      {!loading && (
        <>
          {categoriaId && (
            <h2 className="tcs-titulo-categoria">
              {categories[categoriaId] || "Categoría"}
            </h2>
          )}
          <ItemListContainer articulos={articulos} />
        </>
      )}
    </>
  );
};
