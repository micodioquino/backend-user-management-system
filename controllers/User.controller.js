import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs"

// @GET
// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
    }
}

// @GET
// Get single user
export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findAll({
            where:{ id: req.params.id}
        })
        res.json(user[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

// @POST
// Create new user
export const createUser = async (req, res) => {

    const { fname, lname, username, contact, email, password, address, postal} = req.body

    if(!fname || !lname || !username || !contact || !email || !password || !address || !postal){
        res.status(400)
        res.json({"message": "All fields are required"})
    }

    const userExists = await UserModel.findOne({
        where:{ email: email}
    })

    if(userExists){
        res.status(400)
        res.json({"message": "Email is already exist"})
        return
    }

    const usernameExists = await UserModel.findOne({
        where:{ username: username}
    })

    if(usernameExists){
        res.status(400)
        res.json({"message": "Username is already exist"})
        return
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    try {
        const user = await UserModel.create({
            fname,
            lname,
            username,
            contact,
            email,
            password: hashedPassword,
            address,
            postal
        })
        res.json({
            "message": "User successfully added", user
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// @PUT
// Update User
export const updateUser = async (req, res) => {
    const { fname, lname, username, contact, email, password, address, postal} = req.body

    if(!fname || !lname || !username || !contact || !email || !password || !address || !postal){
        res.status(400)
        res.json({"message": "All fields are required"})
    }

    const userExists = await UserModel.findOne({
        where:{ id: req.params.id}
    })

    if(!userExists){
        res.status(400)
        res.json({"message": "User is not exist"})
        return
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    try {
        const user = await UserModel.update({
            fname,
            lname,
            username,
            contact,
            email,
            password: hashedPassword,
            address,
            postal
        }, {
            where:{ id: req.params.id }
        })
        res.json({
            "message": "User successfully updated", user: req.body})
    } catch (error) {
        res.json({message: error.message})
    }
}

// @DELETE
// Delete single user
export const deleteUser = async (req, res) => {

    const userExists = await UserModel.findAll({
        where:{ id: [req.params.id]}
    })

    if(userExists.length === 0){
        res.status(400)
        res.json({"message": "User is not exist"})
        return
    }

    try {
        await UserModel.destroy({
            where:{ id: [req.params.id] }
        })
        res.json({
            "message": "User successfully deleted"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

// @POST
// Delete multiple users
export const multipleDeleteUser = async (req, res) => {

    const userExists = await UserModel.findAll({
        where:{ id: req.body.ids}
    })

    if(userExists.length === 0){
        res.status(400)
        res.json({"message": "Users are not exist"})
        return
    }

    try {
        await UserModel.destroy({
            where:{ id: req.body.ids }
        })
        res.json({
            "message": "Users [" + req.body.ids + "] successfully deleted"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

