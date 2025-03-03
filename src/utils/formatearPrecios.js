// Formatea el precio como moneda en pesos argentinos
export const formatearPrecio = (precio) => {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
    }).format(precio);
};