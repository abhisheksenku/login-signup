const{DataTypes} = require('sequelize');
const sequelize = require('../utility/sql');
const Users = sequelize.define('usersTable',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    timestamps:true
});
module.exports = Users;