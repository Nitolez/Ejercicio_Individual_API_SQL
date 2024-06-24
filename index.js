const express = require('express');
const pg = require('pg');
const dotenv = require('dotenv');
const morgan = require('./middlewares/morgan');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

// Middlewares
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));
app.use(express.json());

// Rutas
const entriesRoutes = require('./routes/entries.routes');
const authorRoutes = require('./routes/author.routes');

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM entries');
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error al obtener datos:', err);
    res.status(500).send('Error al obtener datos');
  }
});

// API Rutas
app.use('/api/entries', entriesRoutes);
app.use('/api/authors', authorRoutes);

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});
