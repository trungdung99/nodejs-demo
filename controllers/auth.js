import { response } from "express";
import { request } from "express";
import User from '../models/user'
import jwt from 'jsonwebtoken'

export const signup = async (request,response)=>{
    const {email, name, password} = request.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            return response.status(400).json({
                message: "User đã tồn tại"
            })
        }
        const user = await User({email, name, password}).save()
        response.json({
            user:{
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        console.log(error);
    }
}
export const signin = async (request,response) => {
    const {email, password} = request.body;
    const user = await User.findOne({email}).exec();
    if(!user){
        return response.status(400).json({
            message: "User không tồn tại"
        })
    }
    if(!user.authenticate(password)){
        return response.status(400).json({
            message: "Mật khẩu không đúng"
        })
    }
    const token = jwt.sign({_id:user._id}, "123456", {expiresIn:3600})
    response.json({
        user:{
            token,
            _id:user._id,
            email:user.email,
            name:user.name
        }
    })
}