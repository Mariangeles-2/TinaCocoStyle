import { ItemListContainer } from "../components/ItemListContainer";
import { BarLoader } from "react-spinners";
import { useEffect, useState } from "react";

//Importa articulos desde JSON
import data from "../assets/json/articulos.json";

export const Inicio = () => {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(
      () => fetchArticulos().finally(() => setLoading(false)),
      3000
    );

    return () => clearTimeout(timer);
  });

  const fetchArticulos = () =>
    Promise.resolve(data).then((arts) => setArticulos(arts));

  return (
    <>
      <BarLoader
        className="position-relative my-5 top-50 start-50 translate-middle"
        color="#757575"
        width={200}
        loading={loading}
      />
      {!loading && <ItemListContainer articulos={articulos} />}
    </>
  );
};
