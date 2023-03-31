//  Створити програму для відображення результатів голосування. З наступними умовами:
//      1. Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
//      2. Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
//      3. При натисканні на смайл - під ним змінюється значення лічильника.
//      4. Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

const counterSmile = document.querySelectorAll(".holder_card-item-counter");
const imgSmile = document.querySelectorAll(".holder_card-item-img");

imgSmile.forEach((img, index) => {
    img.addEventListener("click", () => {
        counterSmile[index].textContent++
    });
})

