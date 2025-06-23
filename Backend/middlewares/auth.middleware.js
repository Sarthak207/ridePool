// it is used to check if the user is logged in or not
const userModel= require('../models/user.model');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');

module.exports.authUser= async(req,res,next)=>{
    // token is generally present in cookies or some part of the authorization header
    const token= req.cookies.token || req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    try{
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        // during jwt token creation we just gave id and hence will receive an id only
        const user= await userModel.findById(decoded._id);
        req.user= user;
        return next();
    }catch(err){
        return res.status(401).json({message:"Unauthorized"});
    }
}