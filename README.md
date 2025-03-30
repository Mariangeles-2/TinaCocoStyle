# Tina Coco Style 🥥 - E-commerce de bazar

Tina Coco Style es un proyecto de e-commerce desarrollado como parte del curso de React en Coderhouse. Este proyecto permite a los usuarios explorar un bazar, agregar productos al carrito, gestionar cantidades, y finalizar compras con un formulario de datos de envío.

## Características 📋

- Catálogo de productos con categorías.
- Detalle de productos individuales.
- Carrito de compras con control de cantidades.
- Validación de stock en tiempo real.
- Formulario de datos de envío con validaciones.
- Generación de órdenes de compra almacenadas en Firebase.

## Tecnologías Utilizadas 👩🏽‍💻

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router**: Manejo de rutas y navegación.
- **Firebase**: Base de datos en tiempo real para almacenar productos y órdenes.
- **Bootstrap**: Framework CSS para el diseño responsivo.
- **SweetAlert2**: Alertas personalizadas para mejorar la experiencia del usuario.
- **Font Awesome**: Íconos para mejorar la interfaz.

## Instalación 🛠️

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Mariangeles-2/TinaCocoStyle.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd TinaCocoStyle
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

## Uso 🤔

1. Explora el catálogo de productos desde la página principal.
2. Haz clic en un producto para ver sus detalles.
3. Agrega productos al carrito y ajusta las cantidades según sea necesario.
4. Finaliza la compra llenando el formulario de datos de envío.
5. Recibirás un número de orden al completar la compra.

## Estructura del Proyecto 🌲

```plaintext
src/
├── components/         # Componentes reutilizables (NavBar, CartSidebar, etc.)
├── contexts/           # Contextos para manejar el estado global (CartContext)
├── utils/              # Funciones utilitarias (validaciones, manejo de stock)
├── view/               # Vistas principales (Home, ArticleDetail, CartView)
├── config/             # Configuración de Firebase
├── assets/             # Recursos estáticos como imágenes y JSON
└── App.jsx             # Componente principal
```

## Funcionalidades Clave ✨

### Validación de Stock

El sistema valida en tiempo real si hay suficiente stock disponible antes de permitir que un producto sea agregado al carrito.

### Generación de Órdenes

Cada compra genera una orden única que se almacena en Firebase, incluyendo los datos del comprador y los productos adquiridos.

## Próximas Mejoras 🚀

- Integración con pasarelas de pago.
- Implementación de autenticación de usuarios.
- Mejora en la gestión de categorías y filtros.

## Contribuciones 🤝🏽

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección:
   ```bash
   git checkout -b mi-nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agregué una nueva funcionalidad"
   ```
4. Envía tus cambios:
   ```bash
   git push origin mi-nueva-funcionalidad
   ```
5. Abre un Pull Request en este repositorio.

---

¡Gracias por visitar Tina Coco Style! 😊
