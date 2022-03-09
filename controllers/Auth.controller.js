import UserModel from "../models/UserModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const registerUser = async (req, res) => {
    const { fname, lname, username, email, password} = req.body

    if(!fname || !lname || !username || !email || !password){
        res.status(400)
    }

    const userExists = await UserModel.findOne({
        where:{ email: email}
    })

    const usernameExists = await UserModel.findOne({
        where:{ username: username}
    })

    if(usernameExists){
        res.status(400)
        res.json({"message": "Username is already exist"})
    }

    if(!userExists){
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await UserModel.create({
            fname,
            lname,
            username,
            email,
            password: hashedPassword
        })

        if(user){
            res.status(201).json({
                id: user.id,
                fname: user.fname,
                lname: user.lname,
                username: user.username,
                email: user.email,
                token: generateToken(user.id)
            })
        }
        else{
            res.status(400)
            res.json({"message": "Register Error"})
        }
    }
    else{
        res.status(400)
        res.json({"message": "User is already exist"})
    }

    
}

export const loginUser = async (req, res) => {
    const {username, password} = req.body
    
    const user = await UserModel.findOne({
        where:{ username: username}
    })

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user.id)
        })
    }
    else{
        res.status(400)
        res.json({"message": "User is not exist"})
    }
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })
}
