// Importa contexto de CartSidebarContext
import { CartSidebarContext } from "../CartSidebarContext";
//Importa libreria de react
import { useState, useMemo } from "react";
//Importa PropTypes
import PropTypes from "prop-types";

export const CartSidebarContextProvider = ({ children }) => {
  const [showCartSidebar, setShowCartSidebar] = useState(false);

  const value = useMemo(
    () => ({ showCartSidebar, setShowCartSidebar }),
    [showCartSidebar, setShowCartSidebar]
  );

  return (
    <CartSidebarContext.Provider value={value}>
      {children}
    </CartSidebarContext.Provider>
  );
};

CartSidebarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
