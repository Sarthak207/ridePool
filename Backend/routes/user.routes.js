const express= require('express');
const router= express.Router();
// express-validator
const {body}= require("express-validator")
const userController= require('../controllers/user.controller');
const authMiddleware= require('../middlewares/auth.middleware');

router.post('/register',[
    // express-validator use, if it fails withMessage gets called
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('FirstName must be atleast 3 chars long'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 3 chars long'),
],
    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Incorrect Password'),
],
    userController.loginUser
)

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)

module.exports= router;