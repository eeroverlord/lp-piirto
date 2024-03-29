require("dotenv").config();
const mysql = require("mysql");

// Katso .env tiedosto
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

let sql = "SELECT * FROM tiedot";

pool.execute(sql, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

module.exports = pool.promise();
