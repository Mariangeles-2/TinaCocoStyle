//Importa librería de react
import { useState, useContext } from "react";
//Importa librería de react-bootstrap
import { Form, Button } from "react-bootstrap";
//Importa contexto de CartContext
import { CartContext } from "../contexts/CartContext";
//Importa Firestore
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
//Importa SweetAlert
import Swal from "sweetalert2";
//Importa useNavigate de react-router-dom
import { useNavigate } from "react-router-dom";

export const ShippingDataForm = () => {
  const { cartList, getTotalPrice, removeList } = useContext(CartContext);
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const createOrder = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const order = {
      buyer,
      items: cartList.map((item) => {
        const orderItem = { ...item };
        delete orderItem.stock;
        return orderItem;
      }),
      total: getTotalPrice(),
      date: new Date().toISOString(),
    };
    try {
      const docRef = await addDoc(collection(db, "ordenes"), order);
      Swal.fire({
        title: "Orden creada con éxito",
        text: `Tu número de orden es el: ${docRef.id}`,
        icon: "success",
        confirmButtonColor: "#6c757d",
      }).then(() => {
        removeList();
        navigate("/");
      });
    } catch (error) {
      console.error("Error creando orden: ", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un error al crear la orden. Por favor, inténtalo de nuevo.",
        icon: "error",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  return (
    <Form onSubmit={createOrder}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="lastname"
          placeholder="Apellido"
          value={buyer.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="firstname"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={buyer.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="address"
          placeholder="Calle, número, piso, departamento"
          value={buyer.address}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button className="btn btn-secondary ms-2 btn-sm" type="submit">
        Finalizar compra
      </Button>
    </Form>
  );
};
