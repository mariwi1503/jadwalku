"use strict"

import express from 'express';
import { port } from './config/index.js';
import loader from './loaders/index.js'

const startServer = async () => {
    const app = express();
    await loader(app);
  
    app.listen(port, err => {
      if (err) {
        process.exit(1);
        return;
      }
      console.log("Port opened at: " + port);
    });
  }
  
  startServer();