import express from "express";
import { registerUser } from "../controller/User_controller.js";

const router = express.Router();

router.get('/register',registerUser);

export default router;