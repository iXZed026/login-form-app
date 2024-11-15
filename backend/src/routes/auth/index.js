const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validate = require("./validate")

router.post(
    "/register",
    validate.registerValidator(),
    controller.register,
);

// router.post(
//     "/register/"
// )

module.exports = router;