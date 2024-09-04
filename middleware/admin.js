const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require('../config')

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization; // Bearer asdasd-token
    const words = token.split(" ") // words = ["Bearer","asdasd"]
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if(decodedValue.adminname){
        next();
    }
    else{
        res.ststus(403).json({
            msg : "You are not an authenticated admin"
        })
    }
}

module.exports = adminMiddleware;