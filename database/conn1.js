const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'rest_api_db1',
    user: 'prak',
    password: 'prak',
    database: 'rest_api_db1',
    port: '3306'
})

module.exports = connection