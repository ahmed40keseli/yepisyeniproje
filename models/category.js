const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const Category = sequelize.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },name: Sequelize.STRING,
    // name: { 
    //     type:Sequelize.STRING,
    //     allowNull:true 
    // }
});

console.log(`1""1"1"1"1"1"111111111111"1"1"1"1"1${Category}`);

module.exports = Category;   