const Sequelize = require('sequelize'); /* ORM için kullanılan paketi dahil ediyoruz  */

const sequelize = require('../utility/database'); /* database bilgilerinin bulunduğu dosyayı dahil ediyoruz  */

const Product = sequelize.define('product', { /* sequlize.define veri tabanında tablo oluştururuken kullanılır ve veri türlerini vs. belirler */
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },bookname: Sequelize.STRING,
});

module.exports = Product; /* public olması için izin veriyoruz */