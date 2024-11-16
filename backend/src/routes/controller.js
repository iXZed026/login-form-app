const autoBind = require("auto-bind");
const { validationResult } = require("express-validator")
const User = require("../models/user");

module.exports = class {
    constructor() {
        autoBind(this)
        this.User = User
    }

    validationBody(req, res) {
        const result = validationResult(req)
        if (!result.isEmpty()) {
            const errors = result.array();
            let message = [];
            console.log(errors)
            errors.forEach(err => message.push({ path: err.path, message: err.msg }));
            res.status(400).json({
                data: message,
                message: "validation error",
                status:400,
            })
            return false
        } else {
            return true
        }
    }

    validate(req, res, next) {
        if (this.validationBody(req, res)) {
            next();
        }
    }

    response({ res, message, code = 200, data = {} }) {
        res.status(code).json({
            data,
            message,
            status:code,
        })
    }

}