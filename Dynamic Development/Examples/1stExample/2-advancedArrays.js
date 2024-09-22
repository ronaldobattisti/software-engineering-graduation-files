arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1);
arr2 = arr1.slice(2, 4);//Don't modify the arr1
console.log("arr1 = " + arr1 + " and arr2 = " + arr2);
arr3 = arr1.splice(2, 4);//Modifies the arr1
console.log("arr1 = " + arr1 + " and arr3 = " + arr3);

var result = arr2.concat(arr3);
console.log(result)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*------------------------------------------*/
const evens1 = numbers.filter(item => item % 2 === 0);//lambda function
/*------------------------------------------*/
let evens2 = [];
for (cont = 0; cont < numbers.length; cont++) {
    if (numbers[cont] % 2 === 0) {
        evens2.push(numbers[cont]);
    }
}
/*------------------------------------------*/
let evens3 = [];
for (cont = 0; cont < numbers.length; cont++) {
    if (isEven(numbers[cont])) {
        evens3.push(numbers[cont]);
    }
}

function isEven(a) {
    if (a % 2 === 0)
        return true
}
/*------------------------------------------*/
//anonimous function
let even4 = numbers.filter((value) => {
    return value % 2 === 0;
});


console.log(evens1);
console.log(evens2);
console.log(evens3);
console.log(evens4);

var employee = [
    { name: "Ronaldo", age: 28 },
    { name: "Cassio", age: 34 },
    { name: "Gabriel", age: 27 },
    { name: "Guiga", age: 26 }
]

var listPerson = employee.filter(
    function (value) {
        console.log(value.name);
    }
)

var products = [
    { id: 1, description: "Smartphone", category: "Eletronic" },
    { id: 2, description: "Notebook", category: "Eletronic" },
    { id: 3, description: "Fridge", category: "Eletrodomestic" }
]

var justEletronics = products.filter(item => item.category === "Eletronic");
console.log(justEletronics);