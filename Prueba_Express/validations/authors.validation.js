const { body } = require("express-validator");

const authorDataValidateChainMethod = [
    body("id_author")
        .exists({ checkFalsy: true })
        .withMessage("ID is required")
        .isString()
        .withMessage("ID should be string"),
    body("name")
        .exists()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name should be string"),
    body("email").isEmail().withMessage("Provide valid email"),
    body("surname")
        .exists()
        .isString()
        .withMessage("Surname should be string"),
    body("image")
        .optional(),
];

module.exports = {
    authorDataValidateChainMethod
  };
  