//npm install readline-sync --save
let rlSync = require('readline-sync')
//Write right in terminal
let name = rlSync.question("What's your name?")
//Print
console.log(`Hello, ${name}`)