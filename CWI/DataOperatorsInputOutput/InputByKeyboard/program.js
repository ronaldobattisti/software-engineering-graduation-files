//the package.json was created with "npm init -y"

console.log('Hello, world JS!');
console.log('Write the first value: \n')

let keyboard = require('prompt-sync')();

let value = keyboard();

console.log(`You wrote value ${value}`);

console.log("Write value 1: ")

let v1 = parseFloat(keyboard());

console.log("Write value 2: ");

let v2 = parseFloat(keyboard());

console.log(`${v1} + ${v2} = ${v1+v2}`);