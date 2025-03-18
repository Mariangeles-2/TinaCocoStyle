//Importa CartContext
import { CartContext } from "../CartContext";
//Importa libreria de react
import { useState, useMemo, useCallback } from "react";
//Importa PropTypes
import PropTypes from "prop-types";

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = useCallback(
    (article, quantity) => {
      if (cartList.some((item) => item.id === article.id)) {
        const item = cartList.find((item) => item.id === article.id);
        item.quantity += quantity;
        setCartList([...cartList]);
      } else {
        setCartList([...cartList, { ...article, quantity }]);
      }
    },
    [cartList]
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

  const getTotalItems = useCallback(() => {
    return cartList.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartList]);

  const value = useMemo(
    () => ({
      cartList,
      addToCart,
      removeList,
      deleteItem,
      getTotalItems,
    }),
    [cartList, addToCart, removeList, deleteItem, getTotalItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
