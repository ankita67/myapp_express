
var mysql = require("mysql");

function connect()
{
    var connection =  mysql.createConnection({
       // host: '172.17.0.1',
      host:'192.168.42.95',
        database:'dock',
        user : 'root',
        password:'ankita',
        port:'9099'
    });
 connection.connect()
 return connection
}

module.exports={
    connect:connect
}