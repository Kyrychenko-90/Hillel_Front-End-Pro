/*
Мережа фастфудів пропонує кілька видів гамбургерів:
        маленький (50 тугриків, 20 калорій);
        великий (100 тугриків, 40 калорій).
Гамбургер може бути з одним із декількох видів начинок:
        сиром (+ 10 тугриків, + 20 калорій);
        салатом (+ 20 тугриків, + 5 калорій);
        картоплею (+ 15 тугриків, + 10 калорій).
Можна додати добавки:
        посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)
 */

class Hamburger {
    constructor(size, pack) {
        this.size = size;
        this.pack = pack;
        this.full = [];
    }
    static sizeSmall = {
        price: 50,
        calories: 20,
    };
    static sizeBig = {
        price: 100,
        calories: 40,
    };
    static packCheese = {
        price: 10,
        calories: 20,
    };
    static packSalad = {
        price: 20,
        calories: 5,
    };
    static packPotato = {
        price: 15,
        calories: 10,
    };
    static toppingFlavoring = {
        price: 15,
        calories: 0,
    };
    static toppingMayo = {
        price: 20,
        calories: 5,
    };
    addTopping(topping) {
        this.full.push(topping)
    }
    calculatorPrice() {
        const sizePrice = this.size.price;
        const packPrice = this.pack.price;
        const fullPrice = this.full.reduce((acc, current) => acc + current.price, 0);
        return sizePrice + packPrice + fullPrice;
    }
    calculatorCalories() {
    const sizeCalories = this.size.calories;
    const packCalories = this.pack.calories;
    const fullCalories = this.full.reduce((acc, current) => acc + current.calories, 0);
    return sizeCalories + packCalories + fullCalories;
    }
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.sizeSmall, Hamburger.packCheese);
// добавка з майонезу
hamburger.addTopping(Hamburger.toppingMayo);
// запитаємо скільки там калорій
console.log(`Calories: ${hamburger.calculatorCalories()}`);
// скільки коштує
console.log(`Price: ${hamburger.calculatorPrice()}`);
// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.toppingFlavoring);
// А скільки тепер коштує?
console.log(`Price with sauce: ${hamburger.calculatorPrice()}`);




