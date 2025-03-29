//Importa librería de react
import { useState } from "react";
//Importa librería de react-bootstrap
import { Form } from "react-bootstrap";

export const ShippingDataForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="lastname"
          placeholder="Apellido"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="firstname"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="address"
          placeholder="Calle, número, piso, departamento"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </Form.Group>
    </Form>
  );
};
