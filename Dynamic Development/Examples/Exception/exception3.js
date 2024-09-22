function processName(name, callback) {
    if (typeof name !== 'string') {
        callback(new Error('Name should be a string'));
        return;
    }

    if (name.length === 0) {
        callback(new error("Name shouldn't be empty"));
        return;
    }

    callback(null, "Name processed sucessifully");
}

processName("Ronaldo", (error, result) => {
    if (error) {
        console.log("An error has occured: ", error.message);
    } else {
        console.log(result);
    }
})