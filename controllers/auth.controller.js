import * as bcrypt from 'bcrypt'
import userModel from '../models/user.model.js';
import { jwtLib } from '../libraries/jwtLib.js';
import { bcryptLib } from '../libraries/bcryptLib.js';

export const authController = {
    signUp: async (req, res) => {
        const phone_format = /^(\+62|62|0)8[1-9][0-9]{6,9}$/
        try {
            let {
                name,
                phone,
                password,
                gender,
                city,
            } = req.body
            // validate phone format
            const isValid = phone_format.test(phone)
            if(!isValid || phone.length < 10) throw new Error('Nomor telephone tidak valid')

            // set phone format to 08xx
            phone = phone.replace(/(\+62|62)/, '0')

            // hash password with bcrypt
            password = bcryptLib.hasher(password)
            const user = {
                name,
                phone,
                password,
                gender: gender ? gender : null,
                city: city ? city : null
            }
            await userModel.createUser(user)
            res.status(201).json({
                status: 'success',
            })
        } catch (error) {
            res.status(400).json({
                status: 'Failed',
                message: error.message
            })
        }
    },
    login: async (req, res) => {
        const phone_format = /^(\+62|62|0)8[1-9][0-9]{6,9}$/
        try {
            let { phone, password } = req.body
            // validate phone format
            const isValid = phone_format.test(phone)
            if(!isValid || phone.length < 10) throw new Error('Nomor telephone tidak valid')
            // set phone format to 08xx
            phone = phone.replace(/(\+62|62)/, '0')

            const user = await userModel.getUserByPhone(phone)
            if(!user) throw new Error('Nomor handphone belum terdaftar')

            // check password
            const password_matched = bcryptLib.checker(password, user.password)
            if(!password_matched) throw new Error('Password anda salah')

            // generate token
            const token = jwtLib.generate({
                id: user.id,
                name: user.name,
                role: user.role
            })

            res.status(200).json({
                status: 'success',
                token
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                status: 'failed',
                message: error.message
            })
        }
    }
}