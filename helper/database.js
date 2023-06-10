const Sequelize = require('sequelize');

const sequelize  = new Sequelize(process.env.DB_NAME,process.env.DB_LOGIN , process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,

    dialectOptions: {
        timezone: 'local'
      }
});


module.exports = sequelize