const { Pool } = require('pg');
const queries = require('./queries') // Queries SQL

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '123456-d'
  });

// GET
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getEntriesByEmail, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const getAllEntriesWithAuthor = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntriesWithAuthor)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry,[title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteEntry = async (id) => {
    let client, result;
    try {
        client = await pool.connect(); // Esperar a abrir conexión
        const data = await client.query(queries.deleteEntry, [id]);
        result = data.rowCount; // Número de filas afectadas
    } catch (err) {
        console.error('Error en deleteEntry:', err);
        throw err;
    } finally {
        client.release(); // Liberar cliente de la conexión
    }
    return result; // Devolver el número de filas afectadas (debería ser 1 si se eliminó correctamente)
}
//UPDATE
const updateEntry = async (entry) => {
    const { title, content, date, email, category, old_title } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateEntry,[
            title, 
            content, 
            date, 
            email, 
            category, 
            old_title
        ]);
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    deleteEntry,
    updateEntry,
    getAllEntriesWithAuthor
}

module.exports = entries;


// Pruebas

/*     getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data)) */


/*
getAllEntries()
.then(data=>console.log(data))
*/

/*
let newEntry = {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}

createEntry(newEntry)
    .then(data => console.log(data))



const updatedEntry = {
    title: "Lunes de Back-End",
    content: "La venganza de SQL máxima",
    date: "2024-06-17",
    email: "guillermu@thebridgeschool.es",
    category: "Ninguna",
    old_title: "Lunes de back 2"
}

updateEntry(updatedEntry)
    .then(data => console.log(data))
*/