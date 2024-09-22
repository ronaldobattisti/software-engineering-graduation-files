const myPromise = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve("Ok");
    } else {
        reject("Problem :/");
    }
})

myPromise
    .then((result) => {
        console.log("How did it go: " + result);
    })
    .catch((error) => {
        console.log("Went bad: " + error);
    })