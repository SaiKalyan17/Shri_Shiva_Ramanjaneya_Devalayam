import jwt from 'jsonwebtoken';

const ValidateToken = ((req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token is missing or invalid" });
    }
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid or expired token" });
        }
        
        req.user = decoded.user; 
        next(); 
    });
});
const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({ message: "Forbidden: Admins only" });
    }
};


export { adminOnly, ValidateToken };
