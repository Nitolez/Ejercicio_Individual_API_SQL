const { body } = require("express-validator");

const booksDataValidateChainMethod = [
  body("title")
    .exists({ checkFalsy: true })
    .withMessage("Title is required")
    .isString()
    .withMessage("Title should be string"),
  body("author")
    .exists()
    .withMessage("Author is required")
    .isString()
    .withMessage("Author should be string"),
  body("pages")
    .isString()
    .withMessage("Pages should be string"),
  body("year")
    .isString()
    .withMessage("Year should be a string"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description should be string")
];


module.exports = { booksDataValidateChainMethod }