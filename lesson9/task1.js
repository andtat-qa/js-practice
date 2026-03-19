class Gadget {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return "Gadget: " + this.brand + " " + this.model + ", Year: " + this.year;
    }
}

class Smartphone extends Gadget {
    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year);
        this.operatingSystem = operatingSystem;
    }

    getInfo() {
        // Extends the base getInfo with OS info
        return super.getInfo() + ", OS: " + this.operatingSystem;
    }
}

// Devices
const laptop = new Gadget("Apple", "MacBook Air", 2022);
const phone = new Smartphone("Google", "Pixel 8", 2023, "Android");

//Output
console.log(laptop.getInfo());
console.log(phone.getInfo());