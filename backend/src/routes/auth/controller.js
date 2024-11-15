module.exports = new (class {
    register(req,res){
        console.log(req.body)
    }
})()