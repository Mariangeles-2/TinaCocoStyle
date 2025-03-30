//Importa useState, useEffect y useContext de react
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
// Importa la imagen directamente
import imagenTarjetasBancarias from "../assets/img/tcs-tarjetas-bancarias.webp";
//Importa data
import { fetchArticleById } from "../utils/articleUtils";
//Importa Button de react-bootstrap
import Button from "react-bootstrap/Button";
//Importa formatPrice
import { formatPrice } from "../utils/formatPrice";
//Importa URL para imagenes
import { getImageURL } from "../utils/getImageURL";
//Importa contexto
import { CartContext } from "../contexts/CartContext";

export const ArticleDetail = () => {
  const { addToCart } = useContext(CartContext);
  const [articulo, setArticulo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchArticleById(id).then((art) => setArticulo(art));
  }, [id]);

  if (!articulo) return null;

  return (
    <main>
      <div className="d-flex justify-content-center mt-5">
        <img
          className="me-5"
          width={500}
          src={getImageURL(articulo.image)}
          alt={articulo.name}
        />
        <div className="d-flex flex-column align-items-center">
          <h1 className="mt-5 tcs-article-name">{articulo.name}</h1>
          <p className="tcs-product-details mt-3">{articulo.detail}</p>
          <p className="tcs-price">{formatPrice(articulo.price)}</p>
          <p>
            <b>10% EXTRA</b> pagando con{" "}
            <b>tarjeta de débito o transferencia</b> (mínimo de compra $80.000)
          </p>
          <p className="tcs-quota-promo">6 cuotas sin interés pagando con</p>
          <img
            className="tcs-bank-cards-img"
            src={imagenTarjetasBancarias}
            alt="Tarjetas Bancarias"
          />
          <Button
            variant="secondary"
            className="mt-5"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(articulo, 1);
            }}
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
    </main>
  );
};
