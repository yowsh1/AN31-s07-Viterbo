// Store Details
let storeName= "MNMV Tech Store";
let storeLocation= "One Ayala Mall, Makati City";
let storeCapacity = 250;

// Product Inventory
let products = [
  { productName: "Laptop", price: 18999, quantity: 50 },
  { productName: "Smartphone", price: 9999, quantity: 100 },
  { productName: "Tablet", price: 12999, quantity: 80 }
];


//total number of products
function calculateTotalProducts() {
    let totalQuantity = 0;
    for (let product of products) {
      totalQuantity += product.quantity;
    }
    return totalQuantity;
  }
// Check if the inventory exceeds store capacity
function checkInventoryCapacity() {
  let totalQuantity = 0;
  for (let product of products) {
    totalQuantity += product.quantity;
  }
  if (totalQuantity > storeCapacity) {
    console.log("Store is over capacity!");
  }
}

function checkInventoryCapacity(){
    let totalQuantity= 0;
    for (let i=0; i<products.length; i++){
        totalQuantity += products[i].quantity;
    }
    if (totalQuantity>storeCapacity || totalQuantity==storeCapacity){
        console.log("!!The maximum capacity has been reached!!");
    }
}

//add product
function addProduct(productName, price, quantity){
    let totalQuantity= 0;
    //check the storeCapacity
    for (let i=0; i<products.length; i++){
        totalQuantity += products[i].quantity;
    }   
    //ensures that while adding it will not exceed the store capacity
    if(totalQuantity+quantity>storeCapacity){
        console.log("Max capacity has been. You cannot add this product");
        return totalQuantity;
    }else{
        products.push({ productName: productName, price: price, quantity: quantity });
        console.log(`${productName} added to the inventory`)
    }
    
    
}
// Remove product from the inventory
function removeProduct(productName, quantity) {
    for (let product of products) {
      if (product.productName === productName) {
        if (product.quantity < quantity) {
          console.log("Not enough stock.");
        } else {
          product.quantity -= quantity;
          console.log(`${quantity} ${productName}(s) removed.`);
        }
        return;
      }
    }
    console.log("Product not Found")
  }

//Finds the most expensive product 
function mostExpensiveProduct(){
    let mostExpensive= products[0];
    for (let i=0; i<products.length; i++){
        if (products.price > mostExpensive){
            mostExpensive = products;
        }
    }
    return mostExpensive;
}
//total inventotory value (price*quantity)
function calculateTotalInventoryValue(){
    let total= 0;
    for (let product of products){
        total+=product.price*product.quantity;
    }
    return total;
}






// User Interaction - Add a product
let newProductName = prompt("Enter product name:");
let newProductPrice = Number(prompt("Enter product price:"));
let newProductQuantity = Number(prompt("Enter product quantity:"));


console.log(`Store Name : ${storeName} `)
console.log(`Store Location : ${storeLocation} `)
console.log(`Total number of products : ${calculateTotalProducts()} `)
console.log("Total Inventory Value: " + calculateTotalInventoryValue());
addProduct(newProductName, newProductPrice, newProductQuantity);
checkInventoryCapacity();

// Example usage of removeProduct function
removeProduct("Laptop", 10); // Try to remove 10 Laptops
console.log("Current Inventory:", products); // Check current inventory after removal
