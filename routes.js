const express = require('express');
const apiRouter = express.Router();

const authController = require('./src/authmanagement/controller');
const postRoutes = require('./src/postManagement/routes');

module.exports = (app) =>
  apiRouter
    .get('/healthcheck', (req, res) => {
      res.json({
        environment: `${process.env.NODE_ENV}`,
        message: "microservies-middleware is up and running"
      });
    })
    .use(postRoutes(authController))
    
