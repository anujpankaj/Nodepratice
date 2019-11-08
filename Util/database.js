const Sequelize = require('sequelize');

const sequelize = new Sequelize('df61udhnjprn33', 'zwdovihkurydom', '14787427ac0312222a96baed906a11a3d7d21ec04f658c8dd6dd5b83bcc3c27a',
    {
        host: 'ec2-50-16-217-122.compute-1.amazonaws.com',
        dialect: 'postgres',
        port: '5432',
        dialectOptions: {
            ssl: true,
        },
        pool: {
            max: 9,
            min: 0,
            idle: 10000
        }
    });

module.exports = sequelize;