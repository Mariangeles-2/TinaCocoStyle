//Importa CartContext
import { CartContext } from "../CartContext";
//Importa libreria de react
import { useState, useMemo, useCallback } from "react";
//Importa PropTypes
import PropTypes from "prop-types";
//Importa librería de sweetalert2
import Swal from "sweetalert2";
//Importa función formatPrice
import { formatPrice } from "../../utils/formatPrice";

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [showCartSidebar, setShowCartSidebar] = useState(false);

  const validateAndUpdateStock = useCallback(
    (item, newQuantity) => {
      if (newQuantity <= item.stock) {
        item.quantity = newQuantity;
        setCartList([...cartList]);
      } else {
        Swal.fire({
          title: "¡No hay suficiente stock!",
          icon: "error",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    },
    [cartList]
  );

  const addToCart = useCallback(
    (article, quantity) => {
      if (cartList.some((item) => item.id === article.id)) {
        const item = cartList.find((item) => item.id === article.id);
        validateAndUpdateStock(item, item.quantity + quantity);
      } else {
        setCartList([...cartList, { ...article, quantity }]);
      }
    },
    [cartList, validateAndUpdateStock]
  );

  const removeList = useCallback(() => {
    setCartList([]);
  }, []);

  const deleteItem = useCallback(
    (id) => {
      const newCartList = cartList.filter((item) => item.id !== id);
      setCartList(newCartList);
    },
    [cartList]
  );

  const updateQuantity = useCallback(
    (id, quantity) => {
      if (cartList.some((item) => item.id === id)) {
        if (quantity <= 0) {
          deleteItem(id);
        } else {
          const item = cartList.find((item) => item.id === id);
          validateAndUpdateStock(item, quantity);
        }
      }
    },
    [cartList, deleteItem, validateAndUpdateStock]
  );

  const getTotalItems = useCallback(() => {
    return cartList.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartList]);

  const getTotalPrice = useCallback(
    () => cartList.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartList]
  );

  const getFormattedTotalPrice = useCallback(
    () => formatPrice(getTotalPrice()),
    [getTotalPrice]
  );

  const value = useMemo(
    () => ({
      cartList,
      showCartSidebar,
      setShowCartSidebar,
      addToCart,
      updateQuantity,
      removeList,
      deleteItem,
      getTotalItems,
      getTotalPrice,
      getFormattedTotalPrice,
    }),
    [
      cartList,
      showCartSidebar,
      setShowCartSidebar,
      addToCart,
      updateQuantity,
      removeList,
      deleteItem,
      getTotalItems,
      getTotalPrice,
      getFormattedTotalPrice,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
