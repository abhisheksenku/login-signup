require('dotenv').config(); 

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
);
(async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been started with SQL');
    } catch (error) {
        console.error('Unable to connect to database', error);
    }
})();
module.exports = sequelize;
