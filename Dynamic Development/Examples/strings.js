var nome = "Ronaldo Battisti"

var x = nome.length;

console.log(x);

if (nome.length > 15) {
    console.log("Thank you");
} else console.log("Write your full name");

result = nome.length > 15 ? "Thank you" : "Write your full name";

console.log(result)

var game = "the game will be between Barcelona and Real Madrid";
var position = game.indexOf("Real");
console.log(position)

var cutted = game.slice(position, game.length);
console.log(cutted)

var val = game.includes("Real");
console.log(val);

var phrase = "     Hello, world!";
console.log(phrase.trim());

var num = "1, 2, 3, 4, 5, 6, 7";

var arr = num.trim().split(',');

console.log(arr);

var s = "JavaScript & Python";

var aads = 0;

aads = "ronaldo";
