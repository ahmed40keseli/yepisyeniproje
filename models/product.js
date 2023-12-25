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

module.exports = Product;