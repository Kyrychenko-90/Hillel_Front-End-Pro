// Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:
//     отримати від користувача через три prompt три числа
//     показати через alert середнє арифметичне цих чисел

const numberOne = prompt('Введіть перше число');
const numberTwo = prompt('Введіть друге число');
const numberThree = prompt('Введіть третє число');
const average = (+numberOne + +numberTwo + +numberThree) / 3;
alert(`Середнє арифметичне цих чисел дорівнює ${average}`);