class EletrinicDevice {

    constructor(name) {
        this.name = name;
        this.on = false;
    }

    turnOn() {
        if (this.on) {
            console.log("It is already on");
        } else this.on = true;
    }
}

class Smartphone extends EletrinicDevice {
    constructor(name, color, model) {
        super(name);
        this.color = color;
        this.model = model;
    }
}

var s1 = new Smartphone("Samsung", "Black", "A71");

console.log(s1);
s1.turnOn();
s1.turnOn();