class MyClass {
    constructor(value) {
        this.value = value;
    }

    assynchronousOperation() {
        return new Promise((resolve, reject) => {
            const result = this.value * -2;

            if (result >= 0) {
                resolve(result);
            } else {
                reject("Result is negative");
            }
        })
    }
}

const myClass = new MyClass(5);
myClass.assynchronousOperation()
    .then((result) => {
        console.log("The result is: " + result);
    })
    .catch((error) => {
        console.log("An error has occured: " + error);
    })