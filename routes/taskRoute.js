import { Router } from "express";
import taskController from "../controllers/taskController.js";
import auth from "../middlewares/auth.js";

export const router = Router()

router.post('/task/create', auth.user, taskController.create)
router.get('/task/list', auth.user, taskController.taskList)