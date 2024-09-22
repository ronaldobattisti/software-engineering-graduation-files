class Person {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    talk() {
        console.log("Hello, " + this.completeName);
    }

    get completeName() {
        return (this.name + " " + this.surname);
    }
}

p1 = new Person("Ronaldo", "Battisti");

p1.talk();