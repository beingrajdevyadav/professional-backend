import { configDotenv } from "dotenv";
import express from "express";
import connectDB from "./db/db.js";
configDotenv();


// db connectionconnectDB();
connectDB();


console.log("Hello, World!");