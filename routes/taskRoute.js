import { Router } from "express";
import taskController from "../controllers/taskController.js";
import auth from "../middlewares/auth.js";

export const router = Router()

router.post('/task/create', auth.user, taskController.create)
router.get('/task/list', auth.user, taskController.taskList)
router.put('/task/set', auth.user, taskController.setTaskStatus)
router.get('/task/:id', auth.user, taskController.getTaskById)
router.put('/task/:id', auth.user, taskController.update)
router.delete('/task/:id', auth.user, taskController.delete)