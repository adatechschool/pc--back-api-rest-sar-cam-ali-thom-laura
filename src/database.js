const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("new.db");
var md5 = require("md5");

module.exports = db;
