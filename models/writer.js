const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const Writer = sequelize.define('writer', {
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

console.log('glşösşgösig '+ Writer);

module.exports = Writer;   