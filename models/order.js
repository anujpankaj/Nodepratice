const Sequelize = require('sequelize');

const sequelizedb = require('../Util/database');

const Order = sequelizedb.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNll: false,
        primaryKey: true
    }
});

module.exports = Order;