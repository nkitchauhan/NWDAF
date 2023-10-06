const mysql = require('mysql2');  
var connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "root12345",
    database: "nwdaf",
  })
  .promise();  
connection.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!"); 

  });

  module.exports = connection;