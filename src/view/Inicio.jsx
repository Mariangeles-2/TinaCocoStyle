import { ItemListContainer } from "../components/ItemListContainer";
import { BarLoader } from "react-spinners";
import { useEffect, useState } from "react";

export const Inicio = () => {
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
    <div className="d-flex flex-column min-vh-100">
      <BarLoader
        className="position-relative my-5 top-50 start-50 translate-middle"
        color="#757575"
        width={200}
        loading={loading}
      />
      {!loading && <ItemListContainer articulos={articulos} />}
    </div>
  );
};
