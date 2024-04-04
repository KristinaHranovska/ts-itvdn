abstract class Car {
  constructor(
    public brand: string,
    protected model: string,
    protected year: number,
    protected cost: number
  ) {}
  abstract showInfo(): void;
  showBrand(): void {
    console.log(this.brand);
  }
}

class Bmw extends Car {
  constructor(
    protected model: string,
    protected year: number,
    protected cost: number
  ) {
    super("BMW", model, year, cost);
  }
  showInfo(): void {
    console.log(this.model, this.year, this.cost);
  }
}

class Toyota extends Car {
  constructor(
    protected model: string,
    protected year: number,
    protected cost: number
  ) {
    super("Toyota ", model, year, cost);
  }
  showInfo(): void {
    console.log(this.model, this.year, this.cost);
  }
}

class Nissan extends Car {
  constructor(
    protected model: string,
    protected year: number,
    protected cost: number
  ) {
    super("Nisan", model, year, cost);
  }
  showInfo(): void {
    console.log(this.model, this.year, this.cost);
  }
}

const bmw1: Car = new Bmw("116i", 2023, 1142464);
const bmw2: Car = new Bmw("120i", 2023, 1486282);

const toyota1: Car = new Toyota("Camry", 2023, 1167060);
const toyota2: Car = new Toyota("Yaris Cross", 2023, 844100);

const nissan1: Car = new Nissan("Juke", 2023, 964010);
const nissan2: Car = new Nissan("Qashqai", 2023, 1382750);

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
