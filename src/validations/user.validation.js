const { body } = require("express-validator");

const userValidation = [
    body("firstName")
        .isString()
        .isLength({ min: 5, max: 30 })
        .withMessage("First Name should be at least 5 characters and at most 30 characters"),
    body("lastName")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
        .isLength({ min: 5, max: 30 })
        .withMessage("Last Name should be at least 5 characters and at most 30 characters"),
];

module.exports = {
    userValidation
}