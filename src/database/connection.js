require('dotenv').config();
const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.MYSQLHOST,
        port: process.env.MYSQLPORT,
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        database: process.env.MYSQLDATABASE,
    },
});

knex.raw('SELECT 1')
    .then(() => {
        console.log('Conectado ao banco de dados com sucesso.');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err);
        process.exit(1);
    });

module.exports = knex;
