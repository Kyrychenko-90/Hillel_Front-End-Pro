// Створити скрипт який повинен виконувати наступне:
//      питаємо у користувача, що він хоче зробити (add, sub, mult, div);
//      питаємо у користувача перше число;
//      запитуємо у користувача друге число;
//      виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

const action = prompt('Введіть дію: add, sub, mult, div');
const numberOne = +prompt('Введіть перше число');
const numberTwo = +prompt('Введіть друге число');

let result;

switch (action) {
    case 'add':
        result = numberOne + numberTwo;
        alert(`${numberOne} + ${numberTwo} = ${result}`);
        break;
    case 'sub':
        result = numberOne - numberTwo;
        alert(`${numberOne} - ${numberTwo} = ${result}`);
        break;
    case 'mult':
        result = numberOne * numberTwo;
        alert(`${numberOne} * ${numberTwo} = ${result}`);
        break;
    case 'div':
        result = numberOne / numberTwo;
        alert(`${numberOne} / ${numberTwo} = ${result}`);
        break;
    default:
        alert(`Ви вибрали не коректну дію, спробуйте ще раз`);
}