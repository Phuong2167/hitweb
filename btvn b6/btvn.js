const products = [
    {
        id: 1,
        name: "Laptop",
        price: 2000,
        category: "electronics",
        amount: 20
    },
    {
        id: 2,
        name: "Phone",
        price: 1000,
        category: "electronics",
        amount: 2
    },
    {
        id: 3,
        name: "Book",
        price: 20,
        category: "book",
        amount: 10
    },
    {
        id: 4,
        name: "Keyboard",
        price: 100,
        category: "electronics",
        amount: 0
    },
    {
        id: 5,
        name: "Mouse",
        price: 50,
        category: "accessory",
        amount: 15
    }
];

console.log("===== DANH SÁCH SẢN PHẨM =====");

for (const product of products) {
    console.log('ID: ${product.id} | ${product.name} | ${product.price} | ${product.category} | ${product.amount}');
}

console.log("===== SẢN PHẨM CÒN HÀNG =====");

for (const product of products) {
    if(product.amount > 0) {console.log(product.name)}
}

console.log("===== SẢN PHẨM HẾT HÀNG =====");

for (const product of products) {
    if(product.amount === 0) {console.log(product.name)}
}

console.log("===== THỐNG KÊ =====");

let tongsl = 0;
for(const product of products){
    tongsl += product.amount;
}

let tonggt = 0;
for(const product of products){
    tonggt += product.price * product.amount;
}

let tonggia = 0;
for(const product of products){
    tonggia += product.price;
}

let giaTB = tonggia / products.length;

console.log("===== THỐNG KÊ =====");

