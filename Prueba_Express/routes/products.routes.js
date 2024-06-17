const productsController = require('../controllers/products.controller');
const router = require('express').Router();

router.get("/:id?", productsController.getProduct);

router.get("/:id?", productsController.createProduct);

module.exports = router;