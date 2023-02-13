//  Створити ланцюжок прототипів машина => певна марка машини.
//  У підсумкового інстансу повинні бути функції машини типу їхати і гальмувати з прототипу так і функції
//  пов'язані з маркою машини типу вертикального відкриття дверей Lamborghini.

function Car() {
    this.startMoving = true;
    this.stop = true;
    this.openingDoors = "Doors open as standard";
}

const carSedan = new Car();

function Lamborghini() {
    this.openingDoors = "Vertical door opening";

}

const carLamborghini = new Lamborghini();

carLamborghini.__proto__ = carSedan;

console.log(carLamborghini.startMoving);
console.log(carLamborghini.stop);
console.log(carLamborghini.openingDoors);
