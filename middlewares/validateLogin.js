export const validateLogin = (req, res, next)=>{
    try {
        let { token } = req.cookies;
        console.log("Token que llego: " + token)
        const payload = validateToken(token);
        console.log("Token payload:", payload);
        req.user = payload;
        next();
    } catch (error) {
        console.error("Error in validateLogin middleware:", error);
        res.status(401).send({ success: false, message: error.message });
    }
};