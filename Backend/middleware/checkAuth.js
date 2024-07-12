// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//     // try {
//     //     const token = req.headers.authorization.split(" ")[1];
//     //     console.log(token);
//     //     const decoded = jwt.verify(token, process.env.JWT_KEY);
//     //     req.userData = { userId: decoded.userId };
//     //     next();
//     // } catch (error) {
//     //     console.log(error);
//     //     res.status(401).json({ message: 'Authentication failed' });
//     // }
//     try {
//         const token = req.headers.authorization;
//         console.log(token);
//         if (!token) {
//             throw new Error('Authentication failed');
//         }
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.userData = { userId: decoded.userId };
//         next();
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({ message: 'Authentication failed' });
//     }
// }


const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log("Authorization header:", authHeader);

        if (!authHeader) {
            throw new Error('Authentication token missing');
        }

        const token = authHeader.split(' ')[1]; // Extract the token after "Bearer"
        console.log("Token:", token);

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decodedToken);

        req.userData = { userId: decodedToken.userId };
        next();
    } catch (error) {
        console.log("Authentication error:", error.message);
        return res.status(401).json({ message: 'Authentication failed' });
    }
};
