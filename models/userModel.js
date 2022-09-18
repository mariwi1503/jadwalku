import { db } from '../db/connection.js'

export default {
    createUser: async (data) => {
        try {
            let q = `INSERT INTO users set ?`
            const [rows, fields] = await db.query(q, data)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    },
    getUserByPhone: async (phone) => {
        try {
            let q = `SELECT * FROM users WHERE phone = ?`
            const [[rows], fields] = await db.query(q, phone)
            return rows
        } catch (error) {
            throw new Error(error)
        }
    }
}