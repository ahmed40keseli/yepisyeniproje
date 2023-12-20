const mysql = require('mysql2');


const database1 = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password :'Ah123?kkk',
    database : 'node2-app'
})

module.exports = database1;