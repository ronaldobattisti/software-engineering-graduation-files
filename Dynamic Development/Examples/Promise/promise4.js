function getValue(value) {
    return new Promise((resolve, reject) => {
        if (value > 10) {
            value += 1;
            resolve(value);
        }
        else {
            reject("Wasn't possible to get the value");
        }
    })
}

function doubleValue(value) {
    return value * 2;
}

function add10(value) {
    return value + 10;
}

getValue(28)
    .then((value) => {
        console.log("Value getted: " + value);
        return doubleValue(value);
    })
    .then((newValue) => {
        console.log("Second threatment");
        return add10(newValue);
    })
    .then((result) => {
        console.log("The result is: " + result);
    })
    .catch((error) => {
        console.log("An error has occured: " + error);
    })