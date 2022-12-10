const sql = require('mysql');

exports.sql = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mammamia',
});
