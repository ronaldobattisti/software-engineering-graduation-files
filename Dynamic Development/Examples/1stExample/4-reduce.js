var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var total1 = 0;

for (i = 0; i < numbers.length; i++) {
    total1 += numbers[i];
}

console.log(total1);

var total2 = numbers.reduce(function (total2, number) {
    return total2 + number;
}, 0);

console.log(total2);