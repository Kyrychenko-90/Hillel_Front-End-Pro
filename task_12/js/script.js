//  Створити масив, довжину та елементи якого задає користувач.
//  Відсортувати масив за зростанням.
//  Видалити елементи з масиву з 2 по 4 (включно!).
//  У міру змін виводити вміст масиву на сторінку.

const myArray = [4, 14, 12, 27, 2, 37, 8];
console.log(myArray);

function itemsSort (a, b) {
    return a - b ;
}

myArray.sort(itemsSort)
console.log(myArray);

myArray.splice(1,3);
console.log(myArray);
