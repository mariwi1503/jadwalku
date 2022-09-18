import jwt from 'jsonwebtoken'
import { jwt_secret } from '../config/index.js'

export const jwtLib = {
    generate: (data) => {
        return jwt.sign(data, jwt_secret)
    },
    verify: (token) => {
        return jwt.verify(token, jwt_secret)
    }
}