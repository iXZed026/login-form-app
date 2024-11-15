const errors = (err,req,res,next)=>{
    res.status(500).json({message:"An error occurred. Please try again later."})
}

module.exports = errors;