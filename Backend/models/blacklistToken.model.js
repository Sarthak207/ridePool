const mongoose= require('mongoose');

// this is required to blacklist tokens once when we log out
const blacklistTokenSchema= new mongoose.Schema({
    token:{
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 24 hrs in seconds
    }
});

module.exports= mongoose.model('BlacklistToken',blacklistTokenSchema);