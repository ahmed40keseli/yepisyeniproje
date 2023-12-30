const Sequelize = require('sequelize');

const sequelize = new Sequelize('node2-app','root','Ah123?kkk',{
    host:'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

console.log('bağlantı oluşturuldu');

module.exports = sequelize;