import * as dotenv from 'dotenv'
dotenv.config()
const _env = process.env

export const port = _env.PORT

export const dbConfig = {
    port: _env.DB_PORT,
    host: _env.DB_HOST,
    database: _env.DB_NAME,
    user: _env.DB_USER,
    password: _env.DB_PASSWORD,
    connectionLimit: 3
}

export const jwt_secret = _env.JWT_SECRET