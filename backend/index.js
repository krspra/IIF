const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./routes/user.route');
const path=require('path');

dotenv.config({});
const server = express();
const _dirname=path.resolve()


// Importing from files
const connectDB = require('./utils/db');

// Must-have middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173', // Corrected CORS origin URL
    credentials: true // Allow credentials (cookies)
};
server.use(cors(corsOptions));

// API handling
server.use('/api/user', userRouter);
server.use(express.static(path.join(_dirname,"/frontend/dist")))
server.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"))
})

//-------------------------------
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    connectDB();
    console.log(`Server started at Port ${PORT}`);
});
