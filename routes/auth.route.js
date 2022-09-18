import { authController } from "../controllers/auth.controller.js";
import { Router  } from "express";

export const router = Router()

router.post('/signUp', authController.signUp)
router.post('/login', authController.login)