const controller = require("../controller")

module.exports = new (class extends controller {

    register(req, res) {
        this.users.push(req.body)
        console.log(this.users)
    }

})()