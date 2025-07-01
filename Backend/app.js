const dotenv = require('dotenv');
dotenv.config();
const express= require('express');
const cors= require('cors');
const userRoutes= require('./routes/user.routes');
const connectToDb= require('./db/db');
const cookieParser= require('cookie-parser');
const captainRoutes= require('./routes/captain.routes');

const app = express();
connectToDb();

app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);
module.exports= app;