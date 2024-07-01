import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";


export const generateToken=(payload)=>{
    const token=jwt.sign({payload},SECRET,{expiresIn:"30d"})
    return token
}

export const validateToken = (token)=>{
    const verifyToken = jwt.verify(token, SECRET);
    return verifyToken;
};