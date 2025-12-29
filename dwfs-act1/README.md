# Relatos de Papel - React App

Aplicación web desarrollada con **React** y **Vite** que simula una tienda de libros. Permite explorar un catálogo, buscar libros por título, ver detalles y gestionar un carrito de compra.

---

## Funcionalidades

- Listado de libros con información básica
- Búsqueda por título (insensible a mayúsculas y tildes)
- Vista de detalle de cada libro
- Carrito de compra
    - Añadir libros
    - Modificar cantidades
    - Ver resumen del pedido
- Página de checkout y confirmación de pago

---

## Tecnologías usadas

- React
- React Router DOM
- JavaScript (ES6+)
- CSS puro
- Context API + Custom Hooks
- Vite / Create React App  

---

## Custom Hooks

### `useCart`
Gestiona toda la lógica del carrito:
- Añadir libros
- Incrementar / decrementar cantidades
- Calcular total de artículos
- Calcular precio total
- Vaciar carrito

---

### `useBooks`
Encapsula el acceso a los datos de libros:
- Filtrar libros por título
- Obtener un libro por `id`

---

### `useRedirection`
Hook reutilizable para redirecciones automáticas


---
## Instalación y ejecución

En el directorio del proyecto ejecuta:

npm install

npm run dev
