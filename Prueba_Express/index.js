const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

//Middlewares

const error404 = require("./middlewares/error404")
const morgan = require("./middlewares/morgan")

// Logger
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

// Rutas
const booksRoutes = require("./routes/books.routes")
const productsRoutes = require("./routes/products.routes")
const entriesRoutes = require("./routes/entries.routes")
const authorRoutes = require("./routes/author.routes")


app.use(express.json()); // Habilito recepción de JSON en servidor


app.get('/', (req, res) => {
  res.send("Hello World");

})

// Rutas
//API
app.use('/api/books',booksRoutes);
app.use('/api/products',productsRoutes);
app.use('/api/entries',entriesRoutes);
app.use('/api/authors',authorRoutes);


app.use(error404);

  app.listen(port, () => {
    console.log(`Funcionando en: http://localhost:${port}`)
  })



  // app.get("/perros/:name?", (req, res) => {
  //   const name = req.params.name;
  //   console.log(name);
  //   const perros = [
  //     { name: "mordisquitos", age: 2 },
  //     { name: "toby", age: 3 },
  //     { name: "peluson", age: 5 },
  //     { name: "bob", age: 3 },
  //   ];
  //   if(name){ // devuelve 1 perro
  //     const perro_encontrado = perros.find((perro) => perro.name === name);
  //     perro_encontrado?
  //             res.status(200).json(perro_encontrado)
  //             :res.status(404).json({}); // si no encuentra el perro devuelve un objeto vacio
  
  //   }else {
  //     res.status(200).json(perros); // devuelve todos los perros
  //   }
  // });


  //PARA LANZAR NODE INDEX.JS