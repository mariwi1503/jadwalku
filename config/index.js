import * as dotenv from 'dotenv'
dotenv.config()
const _env = process.env

export const port = _env.PORT
export const dbConfig = {
    host: _env.DB_HOST,
    database: _env.DB_NAME,
    user: _env.DB_USER,
    password: _env.PASSWORD,
    connectionLimit: 3
}