import User from "../model/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const register = async(req, resp) => {
     console.log(req.body);
        const { name, email, password, address, address2, city, state, inputZip } = req.body;
        try {
    
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return resp.status(400).json({
                    message: "User already exists"
                })
            }
    
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ name, email, password: hashedPassword, address, address2, city, state, inputZip })
            await user.save()
    
            resp.status(201).json({
                message: "User registered"
            })
    
        } catch (error) {
            console.error(error);
            resp.status(500).json({
                message: "server error",
                error: error.message
            })
        }
}

export const login = async(req, resp) => {
    console.log(req.body);
        const { email, password } = req.body;
        try {
    
            const existingUser = await User.findOne({ email });
            if (!existingUser) {
                return resp.status(400).json({
                    message: "User not found"
                })
            }
    
            const isMatch = await bcrypt.compare(password, existingUser.password);
    
            if (!isMatch) {
                return resp.status(400).json({
                    message: "Invalid Password"
                });
            }
    
            const token = await jwt.sign({userId: existingUser._id}, process.env.JWT_SECRET , {expiresIn: "1D"});
    
            resp.status(200).json({
                message: "User is logged in",
                token: token,
                userId :existingUser._id,
                name: existingUser.name,
                email: existingUser.email,
                address: existingUser.address,
                role: existingUser.role
            })
    
        } catch (error) {
            console.error(error);
            resp.status(500).json({
                message: "server error",
                error: error.message
            })
        }
}