const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const Category = sequelize.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: { 
        type:Sequelize.STRING,
        allowNull:true 
    },
});

console.log('category kayıt');

module.exports = Category;   