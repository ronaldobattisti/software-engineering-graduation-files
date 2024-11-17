var nums = [5, 4, 2, 3]

var nNums = [];
var n1 = 0;
var n2 = 0;

while (nums.length > 0) {
    n2 = Math.min(...nums);
    nums.splice(nums.indexOf(n2), 1);
    n1 = Math.min(...nums);
    nums.splice(nums.indexOf(n1), 1);
    nNums.push(n1);
    nNums.push(n2);
}

console.log(nNums);