import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB";
const app = express();

dotenv.config();

connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
});
