var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var num = numbers.map(function (value) {
    return value * 2;
});
console.log(numbers);
console.log(num);

var employee = [
    { name: "Ronaldo", age: 28 },
    { name: "Cassio", age: 34 },
    { name: "Gabriel", age: 27 },
    { name: "Guiga", age: 26 }
]

names = employee.map(person => person.name);
console.log(names);