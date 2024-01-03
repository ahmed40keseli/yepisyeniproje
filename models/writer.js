const Sequelize = require('sequelize'); /* ORM için kullanılan paketi dahil ediyoruz  */

const sequelize = require('../utility/database'); /* database bilgilerinin bulunduğu dosyayı dahil ediyoruz  */

const Writer = sequelize.define('writer', { /* sequlize.define veri tabanında tablo oluştururuken kullanılır ve veri türlerini vs. belirler */
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },name: Sequelize.STRING,
});

console.log(Writer);

module.exports = Writer; /* public olması için izin veriyoruz */