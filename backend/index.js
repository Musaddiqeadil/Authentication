import express from "express";
import { connectToDatabase } from "./database/connectionToDatabase.js";
import authRoutes from "./routes/auth-route.js";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend-domain.com"], // allow frontend URLs
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

connectToDatabase();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Authentication API");
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
