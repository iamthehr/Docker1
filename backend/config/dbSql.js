var mysql = require("mysql2");

var db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "harshraj5565@",
});

module.exports = db;
