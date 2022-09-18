import { jwtLib } from "../libraries/jwtLib.js";
import { jwt_secret } from "../config/index.js";

export default {
    user: async (req, res, next) => {
        try {
            const token = req.header('Authorization')
            if(!token) throw new Error('Acces denied!')
            
            const verified = jwtLib.verify(token, jwt_secret)
            if(!verified) throw new Error('Unauthorized')

            req.user_id = verified.id
            req.user = verified

            next()
        } catch (error) {
            res.status(401).json({
                status: 'failed',
                message: error.message
            })
        }
    }
}