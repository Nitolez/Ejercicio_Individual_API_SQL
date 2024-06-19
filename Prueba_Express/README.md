# Prueba Express

## Descripción

Este proyecto es una API RESTful construida con Node.js y Express. Proporciona varios endpoints para manejar libros, productos, entradas y autores. Utiliza PostgreSQL como base de datos y Morgan para el logging de solicitudes HTTP.

## Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas](#rutas)
- [Middleware](#middleware)
- [Configuración de la Base de Datos](#configuración-de-la-base-de-datos)

## Requisitos

- Node.js (v14 o superior)
- PostgreSQL

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/prueba_express.git
    cd prueba_express
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

## Ejecución

Para iniciar el servidor en modo desarrollo:

```bash npm run dev
```

## Rutas

Books

GET /api/books: Obtiene todos los libros.
POST /api/books: Crea un nuevo libro.
PUT /api/books/:id: Actualiza un libro existente.
DELETE /api/books/:id: Elimina un libro.

Products

GET /api/products: Obtiene todos los productos.
POST /api/products: Crea un nuevo producto.
PUT /api/products/:id: Actualiza un producto existente.
DELETE /api/products/:id: Elimina un producto.

Entries

GET /api/entries: Obtiene todas las entradas.
GET /api/entries?email=example@example.com: Obtiene entradas por email.
POST /api/entries: Crea una nueva entrada.
PUT /api/entries: Actualiza una entrada existente.
DELETE /api/entries/:id: Elimina una entrada.

Authors

GET /api/authors: Obtiene todos los autores.
POST /api/authors: Crea un nuevo autor.
PUT /api/authors/:id: Actualiza un autor existente.
DELETE /api/authors/:id: Elimina un autor.
