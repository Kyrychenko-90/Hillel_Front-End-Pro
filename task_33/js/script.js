//  1) Реализовать функцию-генератор которая отдаст 10 рандомных чисел в диапазоне переданном в аргументах в ней.

function* numberGen(start, end) {
    for(let i = 0; i < 10; i++) {
        yield Math.floor(Math.random() * (end - start + 1) + start);
    }

}
const generateNum = numberGen(1, 500);
for (let num of generateNum) {
    console.log(num);
}

//  2) Создать свой распорядок дня с помощью async await
//        ( тоесть мы должны "подождать" выполнение асинхронной функции brushTeeth
//        перед тем как приступать к выполнению следующей асинхронной функции)

const breakfast = new Promise((resolve, reject) => {
    resolve("Завтракаю")
});

const goingToWork = new Promise((resolve, reject) => {
    resolve("Иду на работу")
});

const lunch = new Promise((resolve, reject) => {
    resolve("Обедаю")
});

const goingToHome = new Promise((resolve, reject) => {
    resolve("Возвращаюсь домой")
});

async function routine() {
    const action1 = await breakfast;
    console.log(action1);
    const action2 = await goingToWork;
    console.log(action2);
    const action3 = await lunch;
    console.log(action3);
    const action4 = await goingToHome;
    console.log(action4);
}
routine()