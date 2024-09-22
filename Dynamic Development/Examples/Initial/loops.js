var car = [{ model: 'Golf Sapao', brand: 'VW', year: 2005 },
{ model: 'Compass', brand: 'Jeep', year: 2024 }];


//for...in iterates over properties, while for...of iterates over values.
//for...in runs through the array index while for...of through value
for (let characteristic in car) {
    console.log(car[characteristic]);
}

var carTot;

for (let c of car) {
    console.log(c.year);
}

var c = 1;

while (c < 500) {
    console.log(c);
    c++;
}

do {
    c = c - 1;
} while (c > 0)