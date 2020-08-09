const isAdmin = async(req,res,next) => {
    if(req.user && req.user.isAdmin){
        return next()
    } else{
        return res.status(401).send({ message: 'Admin Token is not valid.' });
    }
}
module.exports = isAdmin