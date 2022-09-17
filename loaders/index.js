import expressLoader from './express.js';
import { Container } from 'typedi';
import { dbConfig } from '../config/index.js';
import pool from './connection.js'

export default async (expressApp) => {  
//   require('express-group-routes');
  const mysqlPool = pool(dbConfig)
  Container.set("mysqlpool", mysqlPool);
  
  await expressLoader(expressApp);
};
