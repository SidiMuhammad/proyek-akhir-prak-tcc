const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'rest_api_db2',
    user: 'prak',
    password: 'prak',
    database: 'rest_api_db2',
    port: '3306'
})

module.exports = connection