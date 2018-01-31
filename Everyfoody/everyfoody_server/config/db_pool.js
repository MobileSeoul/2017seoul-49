const mysql = require('mysql');
const dbConfig = {
    host: 'host',
    port: '3306', 
    user: 'root',
    password: 'password', 
    database: 'schema name', 
    connectionLimit: 23 
};
const dbpool = mysql.createPool(dbConfig);

module.exports = dbpool;
