const express= require('express');
const router= express.Router();
// express-validator
const {body}= require("express-validator")
const userController= require('../controllers/user.controller');

router.post('/register',[
    // express-validator use, if it fails withMessage gets called
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('FirstName must be atleast 3 chars long'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 3 chars long'),
],
    userController.registerUser
)

module.exports= router;