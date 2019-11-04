const pg = require('pg').Pool;
const pool = new pg({
    host : 'ec2-50-16-217-122.compute-1.amazonaws.com',
    user : 'zwdovihkurydom',
    database : 'df61udhnjprn33',
    password : '14787427ac0312222a96baed906a11a3d7d21ec04f658c8dd6dd5b83bcc3c27a',
    port : '5432',
    ssl : true
});

module.exports = pool;