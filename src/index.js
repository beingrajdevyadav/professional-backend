import { configDotenv } from "dotenv";
import express from "express";
import connectDB from "./db/db.js";
import { app } from "./app.js";
configDotenv();


// port
const port = process.env.PORT || 8000;

// db connectionconnectDB();
connectDB()
    .then(
        () => {
            app.listen(port, () => {
                console.log(`Server is serving at http://localhost:${port}`)
            })
        }
    )
    .catch((err) => {
        console.log("MongoDb Connection Failed : ", err)
    })

console.log("Hello, World!");