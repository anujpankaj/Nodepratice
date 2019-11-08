const Sequelize = require('sequelize');

const sequelizedb = require('../Util/database');

const CartItem = sequelizedb.define('cartItem', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNll : false,
        primaryKey : true
    },
    quentity : Sequelize.INTEGER
});

module.exports = CartItem;