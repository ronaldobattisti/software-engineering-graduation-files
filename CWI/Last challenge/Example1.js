function hello(str) {
    if (str.trim() == "") {
        return ("Hello, world!");
    } else return (`Hello, ${str}`);
}

console.log(hello("Start"));
console.log(hello(""));
console.log(hello("         "));