const Sequelize = require('sequelize');
const sequelizedb = require('../Util/database');

const user = sequelizedb.define('user',{
    id :{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull :false,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull :false
    },
    email :{
        type : Sequelize.STRING,
        allowNull :false
    }
});

module.exports = user;