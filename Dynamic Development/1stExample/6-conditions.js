var country = "Brazil";

//if
if (country != "Brazil") {
    console.log("You are a foreigner")
} else console.log("You are Brazilian")

//switch
var day = 0;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Fryday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("This day does not exist");
}

//Exercice

var beverage = "Juice";

switch (beverage) {
    case "Juice":
        console.log("Juice: $6.00");
        break;
    case "Refrigerant":
        console.log("Refrigerant: $7.00");
        break;
    case "Alcohol":
        console.log("Alcohol: $11.00");
        break;
    case "Wather":
        console.log("Wather: $3.00");
        break;
    default:
        console.log("Invalid Input, please select between Juice, Refrigerant, Alcohol or Wather");
}