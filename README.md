# Proyecto: Web App de E-commerce

**📋 Descripción del Proyecto**

Este proyecto consiste en el desarrollo del front-end de una Single Page Application (SPA) de e-commerce utilizando React. La aplicación permite a los usuarios navegar por un catálogo de productos, agregar artículos al carrito de compras y realizar una simulación de compras, todo ello con una experiencia de usuario fluida y dinámica.

**📌Host**

- Vercel: para visualizar el proyecto, haz clic aquí: [Pura Vida](https://pura-vida-e-commerce.vercel.app)

**🎯 Objetivos del Proyecto**

- Desarrollar el front-end de una web app de tipo e-commerce con React.
- Incorporar Firestore como base de datos para almacenar y gestionar la información de los productos y las compras.

**![](/public/vite.svg) Tecnologías Utilizadas**

- **Frontend**: Vite + React
- **Backend**: Node.js
- **Base de Datos**: Firebase
- **Control de versiones**: Git y GitHub

## Características principales

**Listado y Detalle de Productos**:

- Implementación de componentes `ItemListContainer` y `ItemDetailContainer` para la generación dinámica del listado de productos y el acceso a la vista en detalle de cada uno.

**Componentes**:

- Separación en componentes contenedores y de presentación para una mejor organización del código utilizando `ItemListContainer` - `ItemList`.

**Navegación**:

- Uso de React Router para la navegación entre las secciones de catálogo, categorías, detalle, carrito y checkout mediante enlases en el componente `NavBar`.

**Criterios de compras**:

- Almacenamiento del estado del carrito de compras mediante Context API, mostrando el contenido en el componente `Cart`.
- Mostrar un icono del carrito en el componente `CartWidget` mostrando el total de unidades agregadas al context.

**Manejo del Carrito**:

- Componente `Count` para seleccionar la cantidad de unidades a agregar al carrito, con validaciones de stock y valor mínimo.
- El componente se oculta en `ItemDetail` tras agregar un producto.

**Firebase**:

- Implementación de Firestore como base de datos, con una colección para almacenar la información de los productos y generación de documentos al confirmar una compra.

**Experiencia de Usuario**:

- Renderizado condicional para mostrar loaders y mensajes informativos, como "producto sin stock" o "carrito vacío".
- Brindarle al usuario el id (o detalles adicionales) de la orden generada en Firestore.

**👥 Contribuidores**

- Nombre del estudiante: Alex Gustavo Welz
- Curso: Coder House - React
- Comisión: 65675
- Instructor: Jorge Duje

**📝 Licencia**

Este proyecto se desarrolla con fines educativos y no tiene fines comerciales.
