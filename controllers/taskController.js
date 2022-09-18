import { db } from "../db/connection.js"
import taskModel from "../models/taskModel.js"

export default {
    create: async (req, res) => {
        try {
            const user_id = req.user_id
            const { name, description } = req.body
            // task check, exist or not
            const task_exist = await taskModel.getTaskByName(name)
            if(task_exist && task_exist.status != 'Done') throw new Error(`Task ${name} already exist and need to be done`)
            await taskModel.createTask({ user_id, name, description })

            res.status(201).json({
                status: 'Success'
            })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    },
    taskList: async (req, res) => {
        try {
            const user_id = req.user_id
            const task_List = await taskModel.getTaskByUserId(user_id)

            res.status(200).json({
                status: 'Success',
                data: task_List
            })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    },
    setTaskStatus: async (req, res) => {
        try {
            const id = req.query.id
            const status = req.body.status
            let data = status == 'Doing' ? { status: 'Doing' } : { status: 'Done' }
            await taskModel.setTaskStatus(id, data)

            res.status(200).json({
                status: 'Success'
            })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    },
    getTaskById: async (req, res) => {
        try {
            const id = req.params.id
            const task = await taskModel.getTaskById(id)
            if(!task) throw new Error('Task is not found')

            res.status(200).json({
                status: 'Success',
                data: task
            })
        } catch (error) {
            res.status(404).json({
                status: 'Failed',
                message: error.message
            })
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const task = await taskModel.getTaskById(id)
            if(!task) throw new Error('Task is not found')

            await taskModel.deleteTask(id)
            res.status(200).json({
                status: 'Success'
            })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id
            const { name, description } = req.body
            let data = {}
            if(name) data.name = name
            if(description) data.description = description
            if(!data) throw new Error('Data update required')

            await taskModel.updateTask(data, id)
            res.status(200).json({ status: 'Success' })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    }
}