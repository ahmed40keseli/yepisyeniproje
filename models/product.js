const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    authorname: { 
        type:Sequelize.STRING,
        allowNull:false 
    },
    bookname:{ 
        type:Sequelize.STRING,
        allowNull:false 
    },
});

console.log(`model product ><><><><><><>"1${Product}`);

module.exports = Product;