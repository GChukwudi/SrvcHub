


module.exports = (req, res, next) => {
    if (req.userData.role !== 'admin') {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
    next();
}