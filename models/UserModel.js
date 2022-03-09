import db from '../database/db.js'

import { DataTypes } from 'sequelize'

const UserModel = db.define('users', {
    fname: { type: DataTypes.STRING },
    lname: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING},
    contact: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    postal: { type: DataTypes.INTEGER },
})

export default UserModel