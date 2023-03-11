// Создать цепочку промисов (длинной минимум в 3) - свой распорядок дня.
//      Например:
//                  (brushTeeth.then(() => dosmthelse.then(())

const breakfast = new Promise((resolve, reject) => {
    console.log("Завтракаю");
    resolve()
});

const goingToWork = new Promise((resolve, reject) => {
    console.log("Иду на работу");
    resolve()
});

const lunch = new Promise((resolve, reject) => {
    console.log("Обедаю");
    resolve()
});

const goingToHome = new Promise((resolve, reject) => {
    console.log("Возвращаюсь домой");
    resolve()
});

breakfast
    .then(() => goingToWork)
    .then(() => lunch)
    .then(() => goingToHome)
    .catch((error) => console.log("Произошла ошибка " + error));