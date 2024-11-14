let input = require('fs').readFileSync('input.txt', 'utf8');
let lines = input.split('\n');

let v1 = 10;
let v2 = 2;

console.log(`${v1} + ${v2} = ${v1+v2}`);