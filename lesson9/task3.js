class Gadget {
    #year;

    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    get year() { return this.#year; }

    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value === "number" && value >= 2000 && value <= currentYear) {
            this.#year = value;
        } else {
            console.log("Error: invalid year");
        }
    }

    // Static method for oldest gadget
    static getOldestGadget(gadgetsArray) {
        if (!gadgetsArray || gadgetsArray.length === 0) {
            return null;
        }

        let oldest = gadgetsArray[0];

        for (let i = 1; i < gadgetsArray.length; i++) {
            if (gadgetsArray[i].year < oldest.year) {
                oldest = gadgetsArray[i];
            }
        }

        return oldest;
    }

    getInfo() {
        return "Gadget: " + this.brand + " " + this.model + ", Year: " + this.year;
    }
}

class Smartphone extends Gadget {
    #os;

    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year);
        this.operatingSystem = operatingSystem;
    }

    get operatingSystem() { return this.#os; }

    set operatingSystem(value) {
        const allowed = ["iOS", "Android", "HarmonyOS"];
        if (allowed.indexOf(value) !== -1) {
            this.#os = value;
        } else {
            console.log("Error: unavailable operating system");
        }
    }

    getInfo() {
        return super.getInfo() + ", OS: " + this.operatingSystem;
    }
}

// All Devices

const devices = [
    new Gadget("Sony", "PlayStation 2", 2000),
    new Smartphone("Apple", "iPhone 13", 2021, "iOS"),
    new Smartphone("Google", "Pixel 8", 2023, "Android"),
    new Gadget("Valve", "Steam Deck", 2022)
];

// Call the static method on the Gadget class
const oldest = Gadget.getOldestGadget(devices);

// Output
if (oldest) {
    console.log("--- Oldest Gadget ---");
    console.log(oldest.getInfo());
}