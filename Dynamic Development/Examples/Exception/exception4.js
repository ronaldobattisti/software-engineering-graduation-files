function checkPositive(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Element should be a array!");
    }
    const allPositive = numbers.every((num) => num > 0);
    if (!allPositive) {
        throw new Error("Array should have only positive numbers!");
    }
}

try {
    const arr = [1, -2, 3, 4, 5, 6, 7];
    checkPositive(arr);
    console.log("Is positive");
} catch (error) {
    console.log("An error has occured: " + error.message);
}