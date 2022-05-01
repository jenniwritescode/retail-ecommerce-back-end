const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3307,
    socketPath: "/tmp/mysql.sock",
    multipleStatements: true,
  });
}

module.exports = sequelize;