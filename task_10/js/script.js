// Написати цикли, які зможуть:
// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

for (let i = 10; i <= 20; i++){
    console.log(i);
}

// 2. Вивести квадрати чисел від 10 до 20.

for (let i = 10; i <= 20; i++){
    console.log(i ** 2);
}

// 3. Вивести таблицю множення на 7.

for (let i = 1; i <= 10; i++){
    console.log(i * 7);
}

// 4. Знайти суму всіх цілих чисел від 1 до 15.

let resultSum = 0;
for (let i = 1; i <= 15; i++){
    resultSum += i;
}
console.log(resultSum);


// 5. Знайти добуток усіх цілих чисел від 15 до 35.

let resultMul = 1;
for (let i = 15; i <= 35; i++){
    resultMul *= i;
}
console.log(resultMul);


// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let resultAverage = 0;
for (let i = 1; i <= 500; i++){
    resultAverage += i;
}
console.log(resultAverage / 500);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

let resultDouble = 0;
for (let i = 30; i <= 80; i++){
    if (i % 2 === 0){
        resultDouble += i;
    }
}
console.log(resultDouble);


// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

for (let i = 100; i <= 200; i++){
    if (i % 3 === 0){
        console.log(i);
    }
}

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

const number = 100;
for (let i = 0; i <= number; i++){
    if (number % i === 0){
        console.log(i);
    }
}

// 10. Визначити кількість його парних дільників.

let count = 0;
for (let i = 2; i <= number; i++){
    if (number % i === 0){
        count++;
    }
}
console.log(count);

// 11. Знайти суму його парних дільників.

let numberSum = 0;
for (let i =2; i <= number; i++){
    if (number % i === 0){
        numberSum += i;
    }
}
console.log(numberSum);

// 12. Надрукувати повну таблицю множення від 1 до 10.

let resultTable = 0;
for (let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        resultTable = i * j;
        console.log(resultTable);
    }
}
