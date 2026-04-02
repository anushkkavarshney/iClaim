import express from "express";
import { login, registration, logout } from "../Controller/authController.js";

const authRoutes = express.Router();

authRoutes.post("/register", registration);
authRoutes.post("/login", login);
authRoutes.get("/logout", logout);

export default authRoutes;
