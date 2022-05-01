const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    socketPath: "/tmp/mysql.sock",
});

sequelize.authenticate().then(function(errors) { console.log(errors) });

module.exports = sequelize;