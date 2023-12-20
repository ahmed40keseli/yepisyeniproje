const connection = require('../utility/database');

module.exports = class Category {
    constructor(name) {
        this.id = (categories.length + 1).toString();
        this.name = name;
    }
}    