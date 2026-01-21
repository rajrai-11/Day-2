import express, {Express} from "express"
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/index.js"
import dotenv from 'dotenv'

dotenv.config();

const app : Express= express();
app.use(cors());
app.use(todoRoutes);

const uri: string =  process.env.MONGO_URL!;

mongoose
    .connect(uri)
    .then(()=>{
        app.listen(3000,() =>{
            console.log(`Server started on Port no 3000`)
        })
    }).catch(error=>{
        throw error;
    })

