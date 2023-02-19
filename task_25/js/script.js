/*
1. Створити клас Людина.
    Властивості:
                імʼя;
                стать.
    Методи:
                конструктор, який приймає два параметри: імʼя та стать.
2. Створити клас Квартира.
    Властивості:
                конструктор не потрібен;
                масив жителів, який при створенні пустий.
    Методи:
                додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
3. Створити клас Будинок.
    Властивості:
                масив квартир, який при створенні пустий;
                максимальна кількість квартир.
    Методи:
                конструктор, який приймає один параметр: максимальну кількість квартир;
                додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти,
                чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так,
                додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
В якості демонстраціїї створити:
        декілька екземплярів класу Людина;
        декілька екземплярів класу Квартира;
        додадити екземпляри класу Людина до екземплярів класу Квартира;
        екземпляр класу Будинок;
        додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/

class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }
    addResidents(human){
        this.residents.push(human);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }
    addApartment(apartment) {
        if(this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        }
    }
}

const human1 = new Human("Bob", "Male");
console.log(human1);
const human2 = new Human("Eva", "Female");
console.log(human2);

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResidents(human1);
console.log(apartment1);
apartment2.addResidents(human2);
console.log(apartment2);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);
console.log(house);