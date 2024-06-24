const { Pool } = require('pg');
const queries = require('./queries'); // Queries SQL

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '123456-d'
});

// GET
const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthorByEmail, [email]);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

// CREATE
const createAuthor = async (author) => {
    const { id_author, name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor, [id_author, name, surname, email, image]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

// DELETE
const deleteAuthor = async (id) => {
    let client, result;
    try {
        client = await pool.connect(); // Esperar a abrir conexión
        const data = await client.query(queries.deleteAuthor, [id]);
        result = data.rowCount; // Número de filas afectadas
    } catch (err) {
        console.error('Error en deleteAuthor:', err);
        throw err;
    } finally {
        client.release(); 
    }
    return result; 
}

// UPDATE
const updateAuthor = async (author) => {
    const { id_author, name, surname, email, image, old_name } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor, [
            id_author,
            name,
            surname,
            email,
            image,
            old_name
        ]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

const authorModel = {
    getAuthorByEmail,
    getAllAuthors,
    createAuthor,
    deleteAuthor,
    updateAuthor
}

module.exports = authorModel;
