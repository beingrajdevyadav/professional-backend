import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
     const connectionInstance =    await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
        console.log("MongoDB connected");
        console.log(connectionInstance.connection.host);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
