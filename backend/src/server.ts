import dotenv from 'dotenv'
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from './router/food.router'

import userRouter from "./router/user.router"
import { dbConnect } from './configs/database.config';
dbConnect()
const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));



app.use("/api/foods", foodRouter)
app.use("/api/users", userRouter)



const port = 5000;
app.listen(port, () => {
    console.log("website servered on http://localhost:" + port);
})

