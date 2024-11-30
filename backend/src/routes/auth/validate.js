const expressValidator = require("express-validator");
const check = expressValidator.check;

module.exports = new class {
    registerValidator() {
        return [
            check("email").isEmail().withMessage("Email is not valid!"),
            check("userName").not().isEmpty().withMessage("Username must not be empty!"),
            check("password").not().isEmpty().withMessage("Password must not be empty!")
        ]
    }
    LoginValidator() {
        return [
            check("email").isEmail().withMessage("Email is not valid!"),
            check("password").not().isEmpty().withMessage("Password must not be empty!")
        ]
    }
}