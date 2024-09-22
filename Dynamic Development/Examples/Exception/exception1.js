function divide(a, b) {
    if (b === 0) {
        throw new Error("Can't divide by zero");
    } else return a / b;
}

try {
    const result = divide(10, 0);
    console.log("Result: " + result);
} catch (error) {
    console.log("An exception ocurred: " + error)
}