const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
    const requestHeader = req.headers['authorization']
    const token = requestHeader && requestHeader.split(' ')[1] // Bearer TOKEN
    if (token == null) return res.sendStatus(401)
    try {
        jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, user) => {
            if (err) return sendStatus(403)
            req.user = user
            next()
        });
    }   catch (err) {
        console.log('authenticate error', err);
    }
}

module.exports = {
    authenticateUser
};
