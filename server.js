require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const { createJwtTokens } = require('./middleware/jwtMiddleware');

process.on('uncaughtException', err => console.error(err));
process.on('unhandledRejection', err => { console.error(err) });

mongoose.Promise = global.Promise;
const mongooseOptions = {
    useNewUrlParser: true
};

mongoose.connect(process.env.DB_URL, mongooseOptions);
const db = mongoose.connection;

db.on('error', err => {
    console.error('Mongoose error', err);
});

db.once('open', async () => {
    console.log('Connected To', process.env.DB_URL);

    const apiRoutes = require('./routes');
    const app = express();
    app.use(express.json());
    app.use('/api', apiRoutes(app));

    app.post('/login', async (req, res) => {
        // Authenticate user
        const userId = req.body.userId
        const { accessToken, refreshToken } = await createJwtTokens(userId)
        res.json({
            accessToken, refreshToken 
        })
    })

    app.listen(process.env.PORT, err => {
        if (err) throw err;
        console.log('Server listen on port ', process.env.PORT);
    });
});


