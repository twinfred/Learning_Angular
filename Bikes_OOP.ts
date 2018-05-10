class Bike {
    miles: number;
    constructor(
        public price: number,
        public max_speed: string) {
        this.miles = 0;
        }
    displayInfo = () => {
        let info = "Price: $"+ this.price +", Max Speed: "+ this.max_speed +", Miles: "+ this.miles;
        console.log(info);
        return this;
    }
    ride = () => {
        this.miles += 10;
        console.log("Riding");
        return this;
    }
    reverse = () => {
        this.miles -= 5;
        console.log("Reversing");
        if (this.miles < 0) {
            this.miles = 0;
        }
        return this;
    }
}

const bike1 = new Bike(100, "20mph");
const bike2 = new Bike(250, "30mph");
const bike3 = new Bike(800, "100mph");

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();