// 1. Створіть масив елементів (Наприклад: ["apple", "carrot", "pear", "celery"]).
// 2. Виведіть послідовно кожен елемент масиву з допомогою forEach().
// 3. Виведіть послідовно кожен елемент масиву з допомогою for ... of.

const foods = ["apple", "carrot", "pear", "celery"];

foods.forEach((elem) => {
    console.log(elem);
});

for (let food of foods) {
    console.log(food);
}