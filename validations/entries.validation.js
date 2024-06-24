const { body } = require("express-validator");

const entriesDataValidateChainMethod = [
  body("title")
    .exists({ checkFalsy: true })
    .withMessage("Title is required")
    .isString()
    .withMessage("Title should be string"),
  body("content")
    .exists()
    .withMessage("Content is required")
    .isString()
    .withMessage("Content should be string"),
  body("date")
    .isDate()
    .withMessage("Date should be string"),
  body("email")
    .isEmail()
    .withMessage("Email should be a string"),
  body("category")
    .optional()
    .isString()
    .withMessage("Category should be string")
];


module.exports = { entriesDataValidateChainMethod }