const Sequelize = require('sequelize');

const sequelizedb = require('../Util/database');

const product = sequelizedb.define('products', {
    id: {
        type : Sequelize.INTEGER,
        autoIncrement :true,
        allowNull : false,
        primaryKey: true
    },
    title: {
        type :Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl :{
        type : Sequelize.STRING,
        allowNull : false
    },
    description :{
        type : Sequelize.STRING,
        allowNull : false
    }

});

module.exports = product;