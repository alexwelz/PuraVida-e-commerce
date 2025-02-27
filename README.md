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

## Instalación y Configuración

- **Clonar el repositorio**:

```
git clone https://github.com/alexwelz/PuraVida-e-commerce.git
```

- Abrir el proyecto en Visual Studio Community.

Luego, para ejecutar este proyecto en tu máquina local, sigue los pasos a continuación:

### 1. Instalar Node.js

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Puedes descargarlo e instalarlo desde su sitio web oficial.

### 2. Crear un nuevo proyecto con Vite

Dirígete a la documentación de Vite en [vite.dev](https://vite.dev/guide/) y ejecuta el siguiente comando en la consola CMD:

```
npm create vite@latest
```

Cuando se te solicite, selecciona las siguientes opciones:

- Framework: React
- Framework: JavaScript

### 3. Instalar dependencias

Una vez creado el proyecto, navega al directorio del proyecto y ejecuta el siguiente comando dentro de la terminal de visual studio para las dependencias necesarias:

```
npm i
```

### 4. Instalar React Router

Para gestionar la navegación en tu aplicación, instala React Router ejecutando el siguiente comando en la terminal:

```
npm install react-router
```

### 5. Instalar Firebase

Para utilizar Firebase como base de datos, ejecuta el siguiente comando:

```
npm install firebase
```

### 6. Ejecutar el proyecto en localhost

Para visualizar la aplicación en tu navegador, ejecuta el siguiente comando:

```
npm run dev
```

## Contribuidores

- Nombre del estudiante: Alex Gustavo Welz
- Curso: Coder House - React
- Comisión: 65675
- Instructor: Jorge Duje

**📝 Licencia**

Este proyecto se desarrolla con fines educativos y no tiene fines comerciales.
