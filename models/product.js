const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    // authorname: { 
    //     type:Sequelize.STRING,
    //     allowNull:false 
    // },
    bookname:{ 
        type:Sequelize.STRING,
        allowNull:false 
    },
    writerId: {
        type: Sequelize.INTEGER, // Assuming writerId is an integer
        allowNull: false,
        references: {
            model: 'writers', // Make sure the table name is correct
            key: 'id'
        }
    },    
});

module.exports = Product;