// 1) Избавится от неуникальных элементов массива
const numbersArray = [1,1,2,3,4,5,5,5,6];
const numberUniqueArray = new Set(numbersArray);
console.log([...numberUniqueArray]);

// 2) Создать Map который будет по переданному объекту возвращать строку привествия
// greetUser(userBob) // Hello Bob nice to see you
// greetUser(userJane) // How your kids doing Jane?
// Иными словами создать Map где ключ это будет объект а значение строка

const userBob = {
    name: "Bob"
}
const userJane = {
    name: "Jane"
}

const greetUser = new Map();
greetUser.set(userBob, () => console.log("Hello Bob nice to see you"));
greetUser.set(userJane, () => console.log("How your kids doing Jane?"));

greetUser.get(userBob)();
greetUser.get(userJane)();

// 3) Создать функцию по превращению Map в object или object в Map в зависимости от того что было передано в функцию.

function transformation(value) {
    const transform = value instanceof Map ? [...value.entries()] : Object.entries(value);
    return value instanceof Map ? Object.fromEntries(transform) : new Map(transform);
}

const human = {
    name: "Bob",
    age: 25
}

const result = transformation(human);
console.log(result);
const resultNext = transformation(result);
console.log(resultNext);