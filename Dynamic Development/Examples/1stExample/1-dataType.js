var n = 20;
console.log(typeof (n));
var nam = "Ronaldo";
console.log(nam.toLocaleUpperCase())

let a = 3;
let b = "3"
console.log("a is: " + typeof (a) + " and b is: " + typeof (b))
console.log(a === b)
console.log(a == b)

let c = a += b;
console.log(c);

//Arrays

var arr = [1, 2, 3, 4, 5, 6];
var arr1 = Array(42);   //Array with lenght 42 but empty
var arr2 = [42];        //Array with one value - 42

for (var pos = 0; pos < arr.length; pos++) {
    console.log("Position: " + pos + ", Value: " + arr[pos]);
}

//Arrays Methods

let arrInverted = [...arr];//Shallow copy
arrInverted.reverse();
for (var pos = 0; pos < arrInverted.length; pos++) {
    console.log("Position: " + pos + ", Value: " + arrInverted[pos])
}

arrJoined = arr.join('|');
console.log(arrJoined)

console.log("Position number 3 in arr = " + arr.indexOf(3))

arr.push(7);

console.log(arr)

arr.pop();

console.log(arr)

arr.sort();

console.log(arr)

arr.unshift(0);

console.log(arr)

arr.shift();

console.log(arr);

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr2);

var arr3 = arr2.splice(2, 2);

console.log(arr2);

console.log(arr3);