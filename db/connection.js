import { createPool } from 'mysql2';
import { dbConfig  } from '../config/index.js';

export const db = createPool(dbConfig).promise()