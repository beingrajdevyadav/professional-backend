// console.log("Jai Shree Shyam!")

import express from "express";
import mongoose from "mongoose";

import { DB_NAME } from "./src/constants.js";
import { configDotenv } from "dotenv";

configDotenv();


const app = express();
const PORT = process.env.PORT || 8000;
mongoose
    .connect(`${process.env.DB_URI}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Connected to MongoDB database: ${DB_NAME}`);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
