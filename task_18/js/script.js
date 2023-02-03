// Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:
//      1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне
//          лише числових елементів даного масиву.
/*
const oneArray = [10, "Winter", 23, 137, "Summer", "Laptop", 28, 7, "Mouse"];
function oneFunction(array) {
    const newArray = array.filter(elem => typeof elem === "number");
    const newArraySum = newArray.reduce((acc, current) => {
        return (acc + current)
    })
    return console.log(newArraySum / newArray.length)
}
oneFunction(oneArray)
*/
//      2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
//          У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії,
//          вказаної в змінній znak.Обидва числа і знак виходять від користувача.
/*
const x = +prompt('Введіть перше число');
const y = +prompt('Введіть друге число');
const znak = prompt('Ведіть дію: +, -, *, /, %, ^');

function doMath(x, znak, y) {
    let result
    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = x ** y;
            break;
        default:
            alert(`Ви обрали не коректну дію, спробуйте ще раз`);
    }
    return alert(result);
}
doMath(x, znak, y)
*/
//      3.Написати функцію заповнення даними користувача двомірного масиву.
//          Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх
//          елементів всіх масивів задає користувач.
/*
function terribleArray() {
    const newArray = [];
    let amountArray = +prompt("Введіть кількість массивів в першому массиві");

    for(let i = 0; i < amountArray; i++) {
        newArray.push([]);
        let amountArrayTwo = +prompt(`Введіть кількість елементів в ${(i + 1)} массиві`);
        for(let j = 0; j < amountArrayTwo; j++) {
            let elem = prompt(`Введіть ${(j + 1)} елемент массива`);
            newArray[i].push(elem);
        }
    }
    console.log(newArray);
}

terribleArray();
*/

//      4.Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
//          'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи
//          для видалення задає користувач.

const string = prompt('Введіть щось');
stringArray = [];
stringArray.push(string);

const arrayLength = +prompt("Введіть кількість елементів для видалення.");
const array = [];
for (let i = 1; i <= arrayLength; i++){
    const elem = prompt(`Ведіть елемент ${i} для видалення`);
    array.push(elem);
}
console.log(stringArray);
console.log(array);


function lastFunction(string, textDelete){
    const newString = string.splice(textDelete);
    return newString.join("");
}
lastFunction(stringArray, array);