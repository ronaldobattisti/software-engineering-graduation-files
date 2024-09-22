// Base class: Employee
class Employee {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    present() {
        return `Hello, my name is ${this.name}, and I am a ${this.role}.`;
    }

    work() {
        return `${this.name} is working.`;
    }
}

// Derived class: Manager
class Manager extends Employee {
    constructor(name, age, department) {
        super(name, age, "Manager");
        this.department = department;
    }

    manage() {
        return `${this.name} is managing the ${this.department} department.`;
    }
}

// Derived class: Developer
class Developer extends Employee {
    constructor(name, age, language) {
        super(name, age, "Developer");
        this.language = language;
    }

    develop() {
        return `${this.name} is programming in ${this.language}.`;
    }
}

// Function to create an Employee
function createEmployee() {
    try {
        // Clear any previous error messages
        document.getElementById("errorOutput").innerHTML = "";
        document.getElementById("employeeOutput").innerHTML = "";

        // Get values from the form
        const name = document.getElementById("name").value;
        const age = parseInt(document.getElementById("age").value);
        const role = document.getElementById("role").value.toLowerCase();
        const department = document.getElementById("department").value;
        const language = document.getElementById("language").value;

        // Check if all required fields are filled
        if (!name || isNaN(age) || !role) {
            throw new Error("Please fill in all required fields (Name, Age, Role).");
        }

        let employee;

        // Role check and creating appropriate instance
        if (role === "manager") {
            if (!department) {
                throw new Error("Please specify the department for the manager.");
            }
            employee = new Manager(name, age, department);
        } else if (role === "developer") {
            if (!language) {
                throw new Error("Please specify the programming language for the developer.");
            }
            employee = new Developer(name, age, language);
        } else {
            throw new Error("Role must be either 'Manager' or 'Developer'.");
        }

        // Display employee details and actions
        document.getElementById("employeeOutput").innerHTML = `
            <p>${employee.present()}</p>
            <p>${employee.work()}</p>
            ${role === "manager" ? `<p>${employee.manage()}</p>` : ""}
            ${role === "developer" ? `<p>${employee.develop()}</p>` : ""}
        `;
    } catch (error) {
        // Display error message
        displayError(error.message);
    }
}

// Error handling function
function displayError(message) {
    document.getElementById("errorOutput").innerHTML = message;
}
