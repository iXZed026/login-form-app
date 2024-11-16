const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        minlength: 8,
        maxlength: 25,
        required: true,
        toLoweCase: true,
        trim: true
    },
    userName: {
        type: String,
        minlength: 5,
        maxlength: 20,
        required: true,
        trim: true
    },
    password: {
        type: String,
        minLength: 5,
        maxlength: 20,
        required: true,
        trim: true
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User;