const express = require('express');
const apiRouter = express.Router();

module.exports = (app) =>
  apiRouter
    .get('/healthcheck', (req, res) => {
      res.json({
        environment: `${process.env.NODE_ENV}`,
        message: "microservies-middleware is up and running"
      });
    })
    
    
