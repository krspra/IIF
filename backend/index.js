const express = require('express');
const cookieParser = require('cookie-parser')
const server=express();
const cors=require('cors');
const dotenv =require('dotenv')
const userRouter=require('./routes/user.route')

dotenv.config({})

//Importing from files
const connectDB =require('./utils/db')

//must have middlewares
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cookieParser());
const corsOptions={
    origin:'https//localhost:5173',
    credentials:true
}
server.use(cors(corsOptions))

//API handeling
server.use('/api/user',userRouter)

//-------------------------------
const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    connectDB()
    console.log(`Server started at Port ${PORT}`);
})

