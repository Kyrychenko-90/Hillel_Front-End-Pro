//  Створити масив, довжину та елементи якого задає користувач.
//  Відсортувати масив за зростанням.
//  Видалити елементи з масиву з 2 по 4 (включно!).
//  У міру змін виводити вміст масиву на сторінку.

const myAray = [4, 14, 12, 27, 2, 37, 8];
console.log(myAray);

function itemsSort (a, b) {
    return a - b ;
}

myAray.sort(itemsSort)
console.log(myAray);

myAray.splice(1,3);
console.log(myAray);
