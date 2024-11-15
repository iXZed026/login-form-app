const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post(
    "/register",
    controller.register,
);

// router.post(
//     "/register/"
// )

module.exports = router;