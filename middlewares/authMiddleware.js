import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

//Protected Routes token base

export const requireSignIn = async (req,res,next)=>{
    try {
        const decoded = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Unauthorized' }); // Send a 401 Unauthorized response
    }
}

// admin access
export const isAdmin = async(req,res,next)=>{
try {
    const user = await userModel.findById(req.user._id)
    if(user.role !== 1){
        return res.status(401).send({
            success:false,
            message:"Unathorized Access"
        })
    }else{
        next()
    }
} catch (error) {
    console.log(error);
    res.status(401).send({
        success:false,
        error,
        message:"Erron in admin middelware"
    })
}
}