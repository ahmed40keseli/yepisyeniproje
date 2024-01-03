const Sequelize = require('sequelize'); /* ORM için kullanılan paketi dahil ediyoruz  */

const sequelize = require('../utility/database'); /* database bilgilerinin bulunduğu dosyayı dahil ediyoruz  */

const Category = sequelize.define('category', { /* sequlize.define veri tabanında tablo oluştururuken kullanılır ve veri türlerini vs. belirler */
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },name: Sequelize.STRING,
});

console.log(Category);

module.exports = Category; /* public olması için izin veriyoruz */   