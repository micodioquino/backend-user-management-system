import {Sequelize} from 'sequelize'

const db = new Sequelize('ums', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db