require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')

const apiRoutes = require('./routes');
const { createJwtTokens } = require('./middleware/jwtMiddleware');
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
