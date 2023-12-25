const Sequelize = require('sequelize');

const sequelize = new Sequelize('node2-app','root','Ah123?kkk',{
    host:'localhost',
    dialect: 'mysql'
});

console.log(`><<><><><><><>>>>>>>>>>>>>>>>><><><>${sequelize}`)

module.exports = sequelize;