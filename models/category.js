// const connection = require('../utility/database');

// module.exports = class Category {
//     constructor(name) {
//         this.id = (categories.length + 1).toString();
//         this.name = name;
//     }
// }    

// const categories = [
//     { id: "1", name: "autobiography"},
//     { id: "2", name: "biography"},
//     { id: "3", name: "novel"},
//     { id: "4", name: "religious"},
//     { id: "5", name: "science fiction"},
// ];

const categories = [
    { id: "1", name: "Telefon", description: "Telefon kategori ürünleri" },
    { id: "2", name: "Bilgisayar", description: "Bilgisayar kategori ürünleri" },
    { id: "3", name: "Beyaz Eşya", description: "Beyaz Eşya kategori ürünleri" },
];

console.log('deneme');

module.exports = class Category {
    constructor(name) {
        this.id = (categories.length + 1).toString();
        this.name = name;
    }

    saveCategory() {
        categories.push(this);
    }

    static getAll() {
        return categories;
    }

    static getById(id) {
        return categories.find(i => i.id === id);
    }

    static update(category) {
        const index = categories.findIndex(i => i.id === category.id);
        categories[index].name = category.name;
    }

    static deleteById(id) {
        const index = categories.findIndex(i => i.id === id);
        categories.splice(index, 1);
    }
}