const person = {
    name: "Ronaldo",
    age: 27,
    role: "Developer"
}

const personJson = JSON.stringify(person);

console.log(person);
console.log(personJson);

const personObject = JSON.parse(personJson);
console.log(personObject);