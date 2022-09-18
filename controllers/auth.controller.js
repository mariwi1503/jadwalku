import * as bcrypt from 'bcrypt'
import userModel from '../models/user.model.js';

export const authController = {
    signUp: async (req, res) => {
        const saltRound = 10;
        const {
            name,
            phone,
            gender,
            city,
        } = req.body

        // hash password with bcrypt
        const password = bcrypt.hashSync(req.body.password, saltRound)
        const user = {
            name,
            phone,
            password,
        }
        user.gender = gender ? gender : null
        user.city = city ? city : null

        await userModel.createUser(user)
        res.status(201).json({
            status: 'success',
        })
    }
}