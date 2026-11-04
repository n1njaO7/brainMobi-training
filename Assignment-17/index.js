// //1. Event Loop Deep Dive
// console.log("1. Start");

// setTimeout(() => {
//     console.log("2. setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("3. Promise 1");
// });

// queueMicrotask(() => {
//     console.log("4. queueMicrotask");
// });

// Promise.resolve().then(() => {
//     console.log("5. Promise 2");
// });

// console.log("6. End");

// //=================================================

// //2. Functional Programming Basics
// const products = [
//     { id: 1, name: "Laptop", price: 50000, active: true },
//     { id: 2, name: "Mouse", price: 1000, active: false },
//     { id: 3, name: "Keyboard", price: 2000, active: true },
//     { id: 4, name: "Monitor", price: 10000, active: true }
// ];

// // 1. Filter active products
// const activeProducts = products.filter(
//     product => product.active
// );

// // 2. Extract product prices
// const prices = activeProducts.map(
//     product => product.price
// );

// // 3. Calculate total price
// const total = prices.reduce(
//     (sum, price) => sum + price,
//     0
// );

// console.log(activeProducts);
// console.log(total); // 62000

// //=====================================================

//3. Pure Functions and Side Effects
const order = {
    id: 101,
    price: 1000,
    quantity: 2,
    discount: 10
};

// Pure function
function calculateDiscountedPrice(order) {

    const subtotal = order.price * order.quantity;

    const discountAmount =
        subtotal * (order.discount / 100);

    return subtotal - discountAmount;
}

// Pure function
function calculateTax(amount, taxRate) {
    return amount * (taxRate / 100);
}

// Impure function
function saveOrder(order) {
    localStorage.setItem(
        "order",
        JSON.stringify(order)
    );
}

// Pure calculations
const finalPrice = calculateDiscountedPrice(order);
const tax = calculateTax(finalPrice, 18);

console.log("Price:", finalPrice); // 1800
console.log("Tax:", tax); // 324

// Side effect
saveOrder(order);
