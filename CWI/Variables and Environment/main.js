//avoid use var, use const or let

const message = "Hello, world";

console.log(message.length);

const nam = "Ronaldo";
const surname = "Battisti";

console.log(`My name is ${nam} ${surname}`);

const names = "Ronaldo,Cassio,Amanda";
console.log(names.split(","))

//website to search: MDN - Developer Mozilla

//map in js is similar to dictionary in c# or map in JAVA
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1

//set in JS is the same as set in JAVA
