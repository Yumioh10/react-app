// server/config/db.js
const knex = require('knex');

// Update with your database connection details
const db = knex({
  client: 'pg', // 'pg' for PostgreSQL, 'mysql' for MySQL, etc.
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'root',
    database: 'user_auth_db'
  }
});

module.exports = db;