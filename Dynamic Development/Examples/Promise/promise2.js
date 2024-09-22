function arrSum(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            reject("Argument should be a array");
        }

        const sum = array.reduce((total, num) => total + num, 0);

        resolve(sum);
    })
}

const myArray = [1, 2, 3, 4, 5];
arrSum(myArray)
    .then((result) => {
        console.log("The elements sum is: " + result);
    })
    .catch((error) => {
        console.log("An error has occured: " + error)
    });