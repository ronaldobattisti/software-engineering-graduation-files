//----------Regular function----------//
var result = sum(1, 2);

console.log(result)

function sum(a, b) {
    return a + b;
}

//-----------Arrow function----------//
const message = (nam) => {
    console.log(`Hello, ${nam}!`)
}

message("Ronaldo");

const sum2 = (n1, n2) => {
    return n1 + n2;
}

console.log(sum2(1, 3));

const numbers = [1, 2, 3, 4, 5, 6, 7];

const values = numbers.map((num) => num * num);

console.log(values);

var productList = ["Freezer", "Microwave", "Stove", "Kettle"];
var productListUpper = productList.map((item) => item.toUpperCase());
console.log(productListUpper);

//-----------Example-----------//
const shoppingCart = productList;

function addItemToCarto(item) {
    shoppingCart.add(item);
}

function removeItemFromCart(item) {
    const index = shoppingCart.indexOf(item);
    if (index !== 1) {
        shoppingCart.splice(index, 1);
    }
}

console.log(shoppingCart);

function viewCart() {
    if (shoppingCart.length == 0) {
        console.log("Your cart is empty!");
    } else {
        console.log(`Items in your shop cart: \n`);
        for (let i = 0; i < shoppingCart.length; i++) {
            console.log(`${shoppingCart[i]}`);
        }
    }
}

function clearCart() {
    shoppingCart = 0;
    console.log("Your cart is empty!");
}

viewCart();