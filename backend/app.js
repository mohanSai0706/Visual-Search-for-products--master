import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import uploadRoutes from './routes/uploadRoutes.js';
import searchRoutes from './routes/searchRoutes.js';
import authRouter from './routes/authRouter.js';
import cookieParser from 'cookie-parser';
import getRouter from './routes/getDataRoute.js';

import cors from 'cors';
const app = express();
app.use(cookieParser());

dotenv.config();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials:true 
}));


const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use('/api', uploadRoutes);
app.use('/api', searchRoutes);
app.use('/api', getRouter);
app.use('/api',authRouter);



connectDB()
    .then(() => {
        console.log("Database connected successfully");
        
    })
    .catch((err) => {
        console.log("Database not connected");
        console.log(err);
    });
    app.listen(PORT, () => {
        console.log(`Server running on port :${PORT}`);
    });


    