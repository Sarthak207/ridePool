const mongoose= require('mongoose');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');

const userSchema= new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required: true,
            minlength:[3,'First name must be 3 chars long'],
        },
        lastname: {
            type: String,
            minlength:[3,'last name must be 3 chars long'],
        },
    },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength:[5, 'At least 5 chars long'],
        },
        password: {
            type: String,
            required: true,
            select: false, // mtlb har baar user ko select krte wkt ye nai jaega
        },
        socketId: {
            type: String,
        },
})

// we will now create some methods
/* It generates a JWT token for the currently logged-in or registered user.
Used in user authentication workflows like login or signup.*/
userSchema.methods.generateAuthToken= function(){
    const token= jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;
} // it takes 2 params to generate the token

userSchema.methods.comparePassword= async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword= async function (password) {
    return await bcrypt.hash(password,10);
}

const userModel= mongoose.model('user',userSchema);

module.exports= userModel;