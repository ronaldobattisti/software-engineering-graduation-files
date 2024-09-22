class Employee {
    constructor(nam, age, role) {
        this.nam = nam;
        this.age = age;
        this.role = role;
    }

    greet() {
        console.log("Hello, my name is " + this.nam + "!");
    }

    work() {
        console.log(this.nam + " is working.");
    }

}

class Manager extends Employee {
    constructor(nam, age, departure) {
        super(nam, age, "Manager");
        this.departure = departure;
    }

    manage() {
        console.log(this.nam + " is managing.")
    }
}

class Dev extends Employee {
    constructor(nam, age, lenguage) {
        super(nam, age, "Developer");
        this.lenguage = lenguage;
    }

    develop() {
        console.log(this.nam + " is developing in " + this.lenguage);
    }
}

let e1 = new Manager("Cassio", 32, "P&D");
let e2 = new Dev("Ronaldo", 27, "C#");

e1.greet();
e1.work();
e1.manage();

e2.greet();
e2.work();
e2.develop();
