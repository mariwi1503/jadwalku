import { createPool } from 'mysql2'

export default (config) => {
    const pool = createPool(config).promise()
    return pool
}