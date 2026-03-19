class Gadget {
    #year; // Private field for year

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Getter for year
    get year() {
        return this.#year;
    }

    // Setter for year with validation
    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value === "number" && value >= 2000 && value <= currentYear) {
            this.#year = value;
        } else {
            console.log("Error: invalid year");
        }
    }

    getInfo() {
        return "Gadget: " + this.brand + " " + this.model + ", Year: " + this.year;
    }
}

class Smartphone extends Gadget {
    #operatingSystem; // Private field for OS

    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year);
        this.operatingSystem = operatingSystem;
    }

    // Getter for OS
    get operatingSystem() {
        return this.#operatingSystem;
    }

    // Setter for OS with validation
    set operatingSystem(value) {
        const allowed = ["iOS", "Android", "HarmonyOS"];
        // Check if value exists in the allowed list
        if (allowed.indexOf(value) !== -1) {
            this.#operatingSystem = value;
        } else {
            console.log("Error: unavailable operating system");
        }
    }

    getInfo() {
        return super.getInfo() + ", OS: " + this.operatingSystem;
    }
}


// Valid device
const testPhone = new Smartphone("Samsung", "S24", 2024, "Android");

// Invalid Year
testPhone.year = 1995;

// Invalid OS
testPhone.operatingSystem = "Windows";

//Output
console.log(testPhone.getInfo());