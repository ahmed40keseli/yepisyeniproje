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
        allowNull:true 
    },
    bookname:{ 
        type:Sequelize.STRING,
        allowNull:true 
    },
    // categoryid:{ 
    //     type:Sequelize.INTEGER,
    //     allowNull:false 
    // },
});

console.log(Product);

module.exports = Product;