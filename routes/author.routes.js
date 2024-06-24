const express = require('express');
const authorController = require("../controllers/author.controller");
const router = express.Router();
const {
    authorDataValidateChainMethod
  } = require("../validations/authors.validation");

router.get('/', authorController.getAuthor);
router.post('/', authorDataValidateChainMethod, authorController.createAuthor);
router.put('/', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;

// GET http://localhost:3000/api/author --> ALL
// POST http://localhost:3000/api/author
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */
   /*
   PUT http://localhost:3000/api/author
{
    {
        "id_author": 89,
        "name": "Antonio",
        "surname": "El Mas Guapo",
        "email": "antouh@thebridgeschool.es",
        "image": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        "old_name": "Alejandru"
    }
}
    */