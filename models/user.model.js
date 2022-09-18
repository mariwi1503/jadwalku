import { db } from '../db/connection.js'

export default {
    createUser: async (data) => {
        let q = `INSERT INTO users set ?`
        const [rows, fields] = await db.query(q, data)
        return rows
    }
}