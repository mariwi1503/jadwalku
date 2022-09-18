import * as bcrypt from 'bcrypt';
const saltRounds = 10;

export const bcryptLib = {
    hasher: (password) => {
        return bcrypt.hashSync(password, saltRounds)
    },
    checker: (password, hash) => {
        return bcrypt.compareSync(password, hash)
    }
}