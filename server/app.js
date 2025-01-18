import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { corsOptions } from "./constants/config.js";
import { connectDb } from "./utils/features.js";

import adminRoutes from "./routes/admin.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

connectDb(mongoURI);

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/api/v1/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("el");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
