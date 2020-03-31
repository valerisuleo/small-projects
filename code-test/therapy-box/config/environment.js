const Sequelize = require('sequelize');

//Set the database conenection with sequelize
const sequelize  = new Sequelize('nodemysql', 'codetest', 'f10rediluna', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = { sequelize };
