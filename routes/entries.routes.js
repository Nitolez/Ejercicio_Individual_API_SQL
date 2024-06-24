const express = require('express');
// Rutas de productos
const entriesController = require("../controllers/entries.controller");
const router = express.Router();
const {
    entriesDataValidateChainMethod
  } = require("../validations/entries.validation");

router.get('/', entriesController.getEntries);
router.post('/', entriesDataValidateChainMethod, entriesController.createEntry);
router.put('/', entriesController.updateEntry);
router.delete('/', entriesController.deleteEntry);



module.exports = router;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */
   /*
   PUT http://localhost:3000/api/entries
{
    "title":"Prueba de SQL PUT",
    "content":"Probamos el put amigo",
    "date":"2024-06-17",
    "email":"alejandru@thebridgeschool.es",
    "category":"Pruebas",
    "old_title":"noticia desde Node"
}
    */