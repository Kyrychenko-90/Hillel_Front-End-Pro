//  Створити ланцюжок прототипів машина => певна марка машини.
//  У підсумкового інстансу повинні бути функції машини типу їхати і гальмувати з прототипу так і функції
//  пов'язані з маркою машини типу вертикального відкриття дверей Lamborghini.

function Car() {
    this.startMoving = true;
    this.stopMoving = true;
    this.openingDoors = "Стандартное открывание дверей";
}

const carSedan = new Car();

function Lamborghini() {
    this.openingDoors = "Вертикальное открывание дверей";
}

const carLamborghini = new Lamborghini();

carLamborghini.__proto__ = carSedan;

console.log(carLamborghini.startMoving);
console.log(carLamborghini.stopMoving);
console.log(carLamborghini.openingDoors);
