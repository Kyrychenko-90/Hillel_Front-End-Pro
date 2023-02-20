/*
1. Створити сутність "Людина".
    Властивості:
                імʼя;
                вік.
    Методи:
                конструктор, який приймає два параметри: імʼя та вік;
                метод, який виводить у консоль інформацію про людину.
2. Створити сутність "Автомобіль".
    Властивості:
                марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
                власник.
    Методи:
                конструктор, який приймає чотитри параметри (тобто, всі окрім власника):
                    марка, модель, рік виписку, номерний знак
                присвоїти власника - метод повинен приймати екземпляр класу Людина,
                    та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18,
                    інакше виводити у консоль відповідне повідомлення
                метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу
                інформації класу Людина для виведення інформації про власника
В якості демонстраціїї створити:
        декілька екземплярів класу Людина;
        декілька екземплярів класу Автомобіль;
        присвоїти власників автомобілям.
 */

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    humanInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, numberPlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.numberPlate = numberPlate;
    }
    addOwner(owner) {
        owner.age > 18 ? this.owner = owner : console.log('Owner must be at least 19 years');
    }
    carInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, numberPlate: ${this.numberPlate}`);
        this.owner.humanInfo();
    }
}

const human1 = new Human("Bob", 25);
console.log(human1);
const human2 = new Human("Eva", 23);
console.log(human2);

const car1 = new Car("Porsche", "Panamera", 2021, "CB7777AX");
console.log(car1);
const car2 = new Car("Lamborghini", "Aventador", 2020, "BM5555AX");
console.log(car2);

car1.addOwner(human1);
console.log(car1)
car2.addOwner(human2);
console.log(car2)