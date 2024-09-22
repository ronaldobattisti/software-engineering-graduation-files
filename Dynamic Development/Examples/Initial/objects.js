//Creatiing objects

const person = {
    nam: "Ronaldo",
    surname: "Battisti"
}

console.log(person["surname"]);

//2 way
const employee = new Object();

employee.name = "Ronaldo";
employee.surname = "Battisti";

console.log(employee.name)

//3rd way

function createPerson(name, surname, i) {
    return {
        name,
        surname,
        age: i,
        get completeName() {
            return `${this.name} ${this.surname}`;
        }
    };
}

const p1 = createPerson("Ronaldo", "Battisti");

console.log(p1.name);

console.log(p1.completeName);

p1.age = 20;

console.log(p1);