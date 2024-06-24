const { body } = require("express-validator");

const authorDataValidateChainMethod = [
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
  