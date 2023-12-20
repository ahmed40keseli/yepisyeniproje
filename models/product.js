const database1 = require('../utility/database');

module.exports = class Product {

    constructor(authorname, bookname, categoryid) {
        this.authorname = authorname;
        this.bookname = bookname;
        this.categoryid = categoryid;
    }


    saveproduct() {
        return database1.execute('INSERT INTO products (authorname,bookname,categoryid) VALUES (?,?,?) ', [this.authorname,this.bookname,this.categoryid]);
    }

}   