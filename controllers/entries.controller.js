const entry = require('../models/entries.model'); // Importar el modelo de la BBDD
const { validationResult } = require("express-validator");

//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    try {
        if (req.query.email) {
            entries = await entry.getEntriesByEmail(req.query.email);
        }
        else{
            entries = await entry.getAllEntriesWithAuthor();
        }
        res.status(200).json(entries); // [] con las entries encontradas
    } catch (error) {
        res.status(500).json({ error: "error en la BBDD" });
    }
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res, next) => {
  try {
      const errors = validationResult(req);

      // if there is error then return Error
      if (!errors.isEmpty()) {
          return res.status(400).json({
              success: false,
              errors: errors.array(),
          });
      }

      // do some operation - like save data to DB (eg mongodb)
      // dummy code
      // User.create(req.body);

      res.json({ success: true });
  } catch (err) {
      next(err);
  }
};

//Update entry
// PUT http://localhost:3000/entries
const updateEntry = async (req, res) => {
    const modifiedEntry = req.body; // {title,content,date,email,category,old_title}
    if (
      "title" in modifiedEntry &&
      "content" in modifiedEntry &&
      "date" in modifiedEntry &&
      "email" in modifiedEntry &&
      "category" in modifiedEntry &&
      "old_title" in modifiedEntry
    ) {
      try {
        const response = await entry.updateEntry(modifiedEntry);
        res.status(201).json({
          items_updated: response,
          data: modifiedEntry,
        });
      } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
      }
    } else {
      res.status(400).json({ error: "Faltan campos en la entrada" });
    }
  };


//DELETE
  const deleteEntry = async (req, res) => {
    const { id } = req.params; // Obtener el ID de la entrada a eliminar desde los parámetros de la ruta
    try {
        const response = await entry.deleteEntry(id); // Llamar al método del modelo para eliminar la entrada por su ID
        if (response.deletedCount === 1) {
            res.status(200).json({ message: `Entrada con ID ${id} eliminada correctamente` });
        } else {
            res.status(404).json({ error: `No se encontró la entrada con ID ${id}` });
        }
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD al intentar eliminar la entrada" });
    }
};

module.exports = {
    getEntries,
    createEntry,
    deleteEntry,
    updateEntry
}