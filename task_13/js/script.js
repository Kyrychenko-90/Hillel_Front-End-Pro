// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

const numbersArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// 1.    Знайти суму та кількість позитивних елементів.

const numbersPositiveArray = numbersArray.filter((numPositive) => {
    return numPositive > 0
})
let numbersSumArray = numbersPositiveArray.reduce((sum, current) => {
    return sum + current
})
console.log(`Сумма позитивних елементів: ${numbersSumArray}, Кількість позитивних елементів: ${numbersPositiveArray.length}`);

// 2.    Знайти мінімальний елемент масиву та його порядковий номер.

const numbersMinArray = Math.min.apply(null, numbersArray);
const numberIndexMinArray = numbersArray.indexOf(numbersMinArray);
console.log(`Мінімальний елемент масиву: ${numbersMinArray}, його порядковий номер: ${numberIndexMinArray}`);

// 3.    Знайти максимальний елемент масиву та його порядковий номер.

const numbersMaxArray = Math.max.apply(null, numbersArray);
const numberIndexMaxArray = numbersArray.indexOf(numbersMaxArray);
console.log(`Максимальний елемент масиву: ${numbersMaxArray}, його порядковий номер: ${numberIndexMaxArray}`);

// 4.    Визначити кількість негативних елементів.

const numbersNegativeArray = numbersArray.filter((numNegative) => {
    return numNegative < 0
})
console.log(`Кількість негативних елементів: ${numbersNegativeArray.length}`);

// 5.    Знайти кількість непарних позитивних елементів.

const numberUnpairedArray = numbersPositiveArray.filter((numUnpaired) => {
    return numUnpaired % 2 === 1
})
console.log(`Кількість непарних позитивних елементів: ${numberUnpairedArray.length}`);

// 6.    Знайти кількість парних позитивних елементів.

const numberPairedArray = numbersPositiveArray.filter((numPaired) => {
    return numPaired % 2 === 0
})
console.log(`Кількість парних позитивних елементів: ${numberPairedArray.length}`);

// 7.    Знайти суму парних позитивних елементів.

const numberSumPairedPositiveArray = numberPairedArray.reduce((sum, current) => {
    return sum + current
})
console.log(`Сумма парних позитивних елементів: ${numberSumPairedPositiveArray}`);

// 8.    Знайти суму непарних позитивних елементів.

const numberSumUnpairedPositiveArray = numberUnpairedArray.reduce((sum, current) => {
    return sum + current
})
console.log(`Сумма непарних позитивних елементів: ${numberSumUnpairedPositiveArray}`);

// 9.    Знайти добуток позитивних елементів.

const numberMultUnpairedPositiveArray = numbersPositiveArray.reduce((sum, current) => {
    return sum * current
})
console.log(`Добуток позитивних елементів: ${numberMultUnpairedPositiveArray}`);

// 10.   Знайти найбільший серед елементів масиву, ост альні обнулити.

const numbersMaximumArray = Math.max.apply(null, numbersArray);
const finalArray = numbersArray.map((zeroing) => {
    return zeroing === numbersMaximumArray ? zeroing : 0
})
console.log(finalArray);
