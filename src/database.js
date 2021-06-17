// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database("new.db");
// var md5 = require("md5");

const mysql = require("mysql");
const dbConfig = require("db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
