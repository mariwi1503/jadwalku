import taskModel from "../models/taskModel.js"

export default {
    create: async (req, res) => {
        try {
            const user_id = req.user_id
            const { name, description } = req.body
            // task check, exist or not
            const task_exist = await taskModel.getTaskByName(name)
            if(task_exist) throw new Error(`Task ${name} already exist`)
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
    }
}