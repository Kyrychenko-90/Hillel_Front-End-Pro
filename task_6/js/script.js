// В якості ДЗ, необхідно вирішити дві наступні задачі:
//    Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
//    Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.


// Перша частина

const rowOne = prompt('Введіть щось');
const rowTwo = prompt('Ще щось введіть');
const rowThree = prompt('Останній раз');

alert(rowOne + ' ' + rowTwo + ' ' + rowThree);

// Друга частина

const yourNumber = prompt('Введіть  пятизначне число');

const numberOne = yourNumber.charAt(0);
console.log(numberOne);
const numberTwo = yourNumber.charAt(1);
console.log(numberTwo);
const numberThree = yourNumber.charAt(2);
console.log(numberThree);
const numberFour = yourNumber.charAt(3);
console.log(numberFour);
const numberFive = yourNumber.charAt(4);
console.log(numberFive);

alert(`${numberOne} ${numberTwo} ${numberThree} ${numberFour} ${numberFive}`);