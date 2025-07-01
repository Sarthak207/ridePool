const { model } = require('mongoose');
const userModel= require('../models/user.model');
const userService= require('../services/user.service');
const {validationResult} = require('express-validator');
const blacklistTokenModel= require('../models/blacklistToken.model');

module.exports.registerUser= async(req,res,next)=>{
    // aquires validation res from user.routes.js
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname, email, password}= req.body;

    // FIX: Await the DB call!
    const isUserAlready = await userModel.findOne({ email });
    if (isUserAlready) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword= await userModel.hashPassword(password);

    const user= await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    // now we are generating a token for that user
    const token= user.generateAuthToken();
    res.status(201).json({token,user});
}

module.exports.loginUser= async(req,res,next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password}= req.body;
    const user= await userModel.findOne({email}).select('+password');
    // remember in user.model.js we stated that dont give password when user model is 
    // requested, but here we need it to match the password
    if(!user){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    // compare password and generateAuthToken here are user model methods
    const isMatch= await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const token= user.generateAuthToken();
    res.cookie('token',token); // now if i login i will get the token in form of cookie as well
    res.status(200).json({token,user}); 
}

module.exports.getUserProfile= async(req,res,next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser= async(req,res,next)=>{
    res.clearCookie('token');
    const token= req.cookies.token || req.headers.authorization.split(' ')[1];

    await blacklistTokenModel.create({token});
    res.status(200).json({message: 'Logged out'});
}
