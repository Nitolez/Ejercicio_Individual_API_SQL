const authorModel = require('../models/author.model'); // Importar el modelo de la BBDD
const { validationResult } = require("express-validator");


// GET http://localhost:3000/author --> ALL
// GET http://localhost:3000/author?email=hola@gmail.com --> por email
const getAuthor = async (req, res) => {
    let authors;
    try {
        if (req.query.email) {
            authors = await authorModel.getAuthorByEmail(req.query.email);
        } else {
            authors = await authorModel.getAllAuthors();
        }
        res.status(200).json(authors); // [] con las Authors encontradas
    } catch (error) {
        res.status(500).json({ error: "error en la BBDD" });
    }
}

// Crear author por email
const createAuthor = async (req, res, next) => {
//     const newAuthor = req.body; // {id_author, name, surname, email, image}
//     if (
//         "id_author" in newAuthor &&
//         "name" in newAuthor &&
//         "surname" in newAuthor &&
//         "email" in newAuthor &&
//         "image" in newAuthor
//     ) {
//         try {
//             const response = await authorModel.createAuthor(newAuthor);
//             res.status(201).json({
//                 items_created: response,
//                 data: newAuthor,
//             });
//         } catch (error) {
//             res.status(500).json({ error: "Error en la BBDD" });
//         }
//     } else {
//         res.status(400).json({ error: "Faltan campos en la entrada" });
//     }
// }
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

// Update author
// PUT http://localhost:3000/author
const updateAuthor = async (req, res) => {
    const modifiedAuthor = req.body; // {id_author, name, surname, email, image, old_name}
    if (
        "id_author" in modifiedAuthor &&
        "name" in modifiedAuthor &&
        "surname" in modifiedAuthor &&
        "email" in modifiedAuthor &&
        "image" in modifiedAuthor &&
        "old_name" in modifiedAuthor
    ) {
        try {
            const response = await authorModel.updateAuthor(modifiedAuthor);
            res.status(201).json({
                items_updated: response,
                data: modifiedAuthor,
            });
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
}

// DELETE
const deleteAuthor = async (req, res) => {
    const { id } = req.params; // Obtener el ID de la entrada a eliminar desde los parámetros de la ruta
    try {
        const response = await authorModel.deleteAuthor(id); // Llamar al método del modelo para eliminar la entrada por su ID
        if (response === 1) {
            res.status(200).json({ message: `Entrada con ID ${id} eliminada correctamente` });
        } else {
            res.status(404).json({ error: `No se encontró la entrada con ID ${id}` });
        }
    } catch (error) {
        res.status(500).json({ error: "Error en la BBDD al intentar eliminar la entrada" });
    }
};

module.exports = {
    getAuthor,
    createAuthor,
    deleteAuthor,
    updateAuthor
}
