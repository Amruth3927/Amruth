const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require('../config')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization; // Bearer asdasd-token
    const words = token.split(" ") // words = ["Bearer","asdasd"]
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    //
    //during signin ->we have username , type:"admin" | "user" --> this authorization
    //we are just doing authentication
    if(decodedValue.username /*&& decoded.type === "user"  */ ){
        next();
    }
    else{
        res.ststus(403).json({
            msg : "You are not an authenticated user"
        })
    }
}


module.exports = userMiddleware;