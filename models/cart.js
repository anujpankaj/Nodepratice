const Sequelize = require('sequelize');

const sequelizedb = require('../Util/database');

const Cart = sequelizedb.define('cart', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNll : false,
        primaryKey : true
    }
});

module.exports = Cart;