import authController from "../controllers/authController.js";
import { Router  } from "express";

export const router = Router()

router.post('/auth/signUp', authController.signUp)
router.post('/auth/login', authController.login)