import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoute from "./routes/user.route"
import restaurantRoute from "./routes/restaurant.route"
import menuRoute from "./routes/menu.route"
import orderRoute from "./routes/order.route"

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;
// middlewares
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/user", restaurantRoute);
app.use("/api/v1/menu", menuRoute);
app.use("/api/v1/order", orderRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});
