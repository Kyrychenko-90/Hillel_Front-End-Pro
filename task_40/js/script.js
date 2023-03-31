//  Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел
//  (наприклад [1,2, 3]) і генерує список з елементів:

const arrayListNumbers = [1,2,[1.1,1.2,1.3],3];

generateList = (array) => {
    const ul = document.createElement("ul");
    array.forEach((elem) => {
        const li = document.createElement("li");
        if(Array.isArray(elem)) {
            li.appendChild(generateList(elem));
        } else {
            li.textContent = elem;
        }
        ul.appendChild(li);
    });
    return ul;
}

const listNumbers = generateList(arrayListNumbers);
document.body.appendChild(listNumbers);

