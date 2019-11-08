const Sequelize = require('sequelize');

const sequelizedb = require('../Util/database');

const OrderItem = sequelizedb.define('orderItem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNll: false,
        primaryKey: true
    },
    quentity : Sequelize.INTEGER
});

module.exports = OrderItem;