import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Mongo DB connection is succesful")
    } catch (error) {
        console.log(error)
    }
}
export default connectDB;