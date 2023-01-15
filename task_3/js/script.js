// Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
// Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
// Користувач ввів 2 і 2:
// 2+2=4
// 2-2=0
// 2*2=4
// 2/2=1

const numberOne = +prompt('Введіть перше число');
const numberTwo = +prompt('Введіть другє число');

const addition = numberOne + numberTwo;
const subtraction = numberOne - numberTwo;
const multiplication = numberOne * numberTwo;
const division = numberOne / numberTwo;

alert(`Користувач ввів ${numberOne} i ${numberTwo}:\n ${numberOne} + ${numberTwo} = ${addition}\n ${numberOne} - ${numberTwo} = ${subtraction}\n ${numberOne} * ${numberTwo} = ${multiplication}\n ${numberOne} / ${numberTwo} = ${division}`);
