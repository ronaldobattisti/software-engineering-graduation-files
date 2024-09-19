var a = [10, 20, 30, 40, 50, 60];

//For of loop
for (let value of a) {
    console.log(value);
}
//forEach loop
a.forEach(value => console.log(value));
//forEach loop expanded
var total = 0;
a.forEach(element => {
    total += element;
});

console.log(total);

//forEach
a.forEach(function(value, index, array){
    console.log(array[index]);
})