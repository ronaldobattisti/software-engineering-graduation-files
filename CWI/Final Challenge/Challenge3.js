var buf = 0;
for (var i = 1; i<= 7; i++){
    if (i%3==0||i%5==0||i%7==0){
        buf +=i;
    }
}

console.log(buf);