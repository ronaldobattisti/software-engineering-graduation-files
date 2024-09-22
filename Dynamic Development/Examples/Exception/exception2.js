const arr = [1, 2, 3, 4, 'a'];

try {
    const doubleNumber = arr.map((num) => {
        if (typeof num !== 'number') {
            throw new Error("array should only have numbers");
        }
        return num * 2;
    })

    console.log(doubleNumber)
} catch (error) {
    console.log("An error has occured: " + error);
}

