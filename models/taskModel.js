import { db } from '../db/connection.js'

export default {
    createTask: async (task) => {
        try {
            let q = `INSERT INTO tasks set ?`
            const [rows, fields] = await db.query(q, task)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
    getTaskByName: async (name) => {
        try {
            let q = `SELECT status FROM tasks WHERE name = ?`
            const [[rows], fields] = await db.query(q, name)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
    getTaskByUserId: async (userId) => {
        try {
            let q = `SELECT * FROM tasks WHERE user_id = ?`
            const [rows, fields] = await db.query(q, userId)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
    getTaskById: async (id) => {
        try {
            let q = `SELECT * FROM tasks WHERE id = ?`
            const [[rows], fields] = await db.query(q, id)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
    setTaskStatus: async (id, data) => {
        try {
            let q = `UPDATE tasks set ? WHERE id = ?`
            const [rows, fields] = await db.query(q, [data, id])
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteTask: async (id) => {
        try {
            let q = `DELETE FROM tasks WHERE id = ?`
            const [rows, fields] = await db.query(q, id)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
    updateTask: async (data, id) => {
        try {
            let q = `UPDATE tasks set ? WHERE id = ?`
            const [rows, fields] = await db.query(q, [data, id])
            return rows
        } catch (error) {
            throw new Error(error)
        }
    }
}