import express from "express";
import { connectToDatabase } from "./database/connectionToDatabase.js";
import authRoutes from "./routes/auth-route.js";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

connectToDatabase();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Authentication API");
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});

// zWnMtvOL52OH4rlu
// mongodb+srv://musaddiqeadil:zWnMtvOL52OH4rlu@cluster0.wekgni6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
