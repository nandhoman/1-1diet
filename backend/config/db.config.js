const mysql = require('mysql');

// Set database connection credentials
const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: '1op1diet',
};

const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;