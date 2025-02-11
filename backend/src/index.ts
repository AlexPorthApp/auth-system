import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AuthController } from "./infrastructure/controllers/AuthController";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", AuthController.register);
app.post("/login", AuthController.login);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
