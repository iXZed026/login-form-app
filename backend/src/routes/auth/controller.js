const controller = require("../controller");
const bcrypt = require("bcrypt");

module.exports = new (class extends controller {

    async register(req, res) {
        const userEmail = await this.User.find({ email: req.body.email });
        // console.log(userEmail)
        if (userEmail.length === 0) {
            const newUser = new this.User({
                email: req.body.email,
                userName: req.body.userName,
                password: req.body.password,
            })
            const salt = await bcrypt.genSalt(8);
            newUser.password = await bcrypt.hash(newUser.password,salt)
            const result = await newUser.save();
            this.response({ res, data: req.body, message: "Register successfuly created." })
        } else {
            res.status(400).json( {data:[{path:"email",message:"This email has already been created"}],status:400})
        }
    }

})()
