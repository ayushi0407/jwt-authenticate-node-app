const jwt = require("jsonwebtoken");

const jwtSign = async (userId, expiry) => {
    const token = jwt.sign({ userId: userId}, process.env.JWT_SECRET_TOKEN, expiry);
    return token;
};

const createJwtTokens = async (userId) => {
    const accessToken = await jwtSign(userId, { expiresIn: "20m" });
    const refreshToken = await jwtSign(userId, { expiresIn: "1d" });

    return {
        accessToken,
        refreshToken
    };
};

module.exports = {
    createJwtTokens
};
