require('dotenv').config()
const knex = require('knex')({
    client:'mysql2',
    connection:{
        host: process.env.MYSQLHOST,
        port: process.env.MYSQLPORT,
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        database: process.env.MYSQLDATABASE,
    }
})

module.exports = knex