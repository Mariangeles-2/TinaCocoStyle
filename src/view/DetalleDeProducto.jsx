//Importa useState y useEffect de react
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Importa la imagen directamente
import imagenTarjetasBancarias from "../assets/img/tcs-tarjetas-bancarias.webp";
//Importa articulos desde JSON
import data from "../assets/json/articulos.json";
//Importa Button de react-bootstrap
import Button from "react-bootstrap/Button";
//Importa formatearPrecio
import { formatearPrecio } from "../utils/formatearPrecios";
//Importa URL para imagenes
import { obtenerURLImagen } from "../utils/obtenerURLImagen";

export const DetalleDeProducto = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  console.log({ id });

  useEffect(() => {
    setProducto(data.find((producto) => producto.id === Number(id)));
  }, [id]);

  if (!producto) return null;

  return (
    <main>
      <div className="d-flex justify-content-center mt-5">
        <img
          className="me-5"
          width={500}
          src={obtenerURLImagen(producto.image)}
          alt={producto.name}
        />
        <div className="d-flex flex-column align-items-center">
          <h1 className="mt-5 tcs-nombre-producto">{producto.name}</h1>
          <p className="tcs-detalle-producto mt-3">{producto.detail}</p>
          <p className="tcs-precio">{formatearPrecio(producto.price)}</p>
          <p>
            <b>10% EXTRA</b> pagando con{" "}
            <b>tarjeta de débito o transferencia</b> (mínimo de compra $80.000)
          </p>
          <p className="tcs-promo-cuotas">6 cuotas sin interés pagando con</p>
          <img
            className="tcs-imagen-tarjetas-bancarias"
            src={imagenTarjetasBancarias}
            alt="Tarjetas Bancarias"
          />
          <Button variant="secondary" className="mt-5 ">
            Agregar al carrito
          </Button>
        </div>
      </div>
    </main>
  );
};
