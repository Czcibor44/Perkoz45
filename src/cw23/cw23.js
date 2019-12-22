
class Car {

    constructor(brand, model, yearOfProduction) {
        this.brand = brand;
        this.model = model;
        this.yearOfProduction = yearOfProduction;
        }

    displayBrandModel() {
        console.log("Marka: " + this.brand + ", Model: " + this.model + ", ");
    }

    drive() {
        console.log("Driving");

    }

}

function createCar() {
    let fiat500 = new Car("Fiat","500", 2018);

    fiat500.displayBrandModel();
    console.log("Rok produkcji: " + fiat500.yearOfProduction);



}