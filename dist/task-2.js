class Car {
    constructor(brand, model, year, cost) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.cost = cost;
    }
    showBrand() {
        console.log(this.brand);
    }
}
class Bmw extends Car {
    constructor(model, year, cost) {
        super("BMW", model, year, cost);
        this.model = model;
        this.year = year;
        this.cost = cost;
    }
    showInfo() {
        console.log(this.model, this.year, this.cost);
    }
}
class Toyota extends Car {
    constructor(model, year, cost) {
        super("Toyota ", model, year, cost);
        this.model = model;
        this.year = year;
        this.cost = cost;
    }
    showInfo() {
        console.log(this.model, this.year, this.cost);
    }
}
class Nissan extends Car {
    constructor(model, year, cost) {
        super("Nisan", model, year, cost);
        this.model = model;
        this.year = year;
        this.cost = cost;
    }
    showInfo() {
        console.log(this.model, this.year, this.cost);
    }
}
const bmw1 = new Bmw("116i", 2023, 1142464);
const bmw2 = new Bmw("120i", 2023, 1486282);
const toyota1 = new Toyota("Camry", 2023, 1167060);
const toyota2 = new Toyota("Yaris Cross", 2023, 844100);
const nissan1 = new Nissan("Juke", 2023, 964010);
const nissan2 = new Nissan("Qashqai", 2023, 1382750);
bmw1.showBrand();
bmw1.showInfo();
bmw2.showBrand();
bmw2.showInfo();
toyota1.showBrand();
toyota1.showInfo();
toyota2.showBrand();
toyota2.showInfo();
nissan1.showBrand();
nissan1.showInfo();
nissan2.showBrand();
nissan2.showInfo();
//# sourceMappingURL=task-2.js.map