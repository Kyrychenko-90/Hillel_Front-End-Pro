/*  Дано 3 блоки
       1. В лівій частині сторінки - перелік категорій.
       2. При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
       3. Клік на товар - інформацію про товар у правому блоці.
       4. В інформації товару - кнопка “купити”.
       5. При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний
          стан програми ( коли відображається лише список категорій).
 */

const catalogItems = document.querySelectorAll(".box-catalog__item");
const productLists = document.querySelectorAll(".box-product__list");
const descriptions = document.querySelectorAll(".box-description__text");
const buyButton = document.querySelector("#box-description__btm");

const catalogItemsCount = catalogItems.length;

let currentDescription;

catalogItems.forEach(function(catalogItem, index) {
    catalogItem.addEventListener("click", function() {
        for (let i = 0; i < catalogItemsCount; i++) {
            if (i !== index) {
                productLists[i].style.display = "none";
            }
        }
        productLists[index].style.display = "block";
    });
});

productLists.forEach(function(productList) {
    productList.addEventListener("click", (event) => {
        const productItem = event.target.closest('.box-product__item');
        if (productItem) {
            const productListIndex = Array.from(productLists).indexOf(productList);
            for (let j = 0; j < descriptions.length; j++) {
                descriptions[j].style.display = "none";
            }
            currentDescription = descriptions[productListIndex * 4 + Array.from(productList.children).indexOf(productItem)];
            currentDescription.style.display = "block";
            buyButton.style.display = "block";
        }
    });
});

buyButton.addEventListener("click", function() {
    productLists.forEach(function(productList) {
        productList.style.display = "none";
    });
    descriptions.forEach(function(description) {
        description.style.display = "none";
    });
    buyButton.style.display = "none";
    boxForm.style.display = "block";
});

const form = document.querySelector('.box2-form');
const tableName = document.querySelector('#table_name');
const tableCity = document.querySelector('#table_city');
const tableNovaPoshta = document.querySelector('#table_nova-poshta');
const tabPayment = document.querySelector('#table_payment');
const tableQuantity = document.querySelector('#table_quantity');
const tableComment = document.querySelector('#table_comment');
const tableProduct = document.querySelector('#table_product');
const boxForm = document.querySelector('.box2-description');
const boxTable = document.querySelector('.box2-check');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    tableName.textContent = form.elements.name.value;
    tableCity.textContent = form.elements.city.value;
    tableNovaPoshta.textContent = form.elements['nova-poshta'].value;
    tabPayment.textContent = form.elements.payment.value;
    tableQuantity.textContent = form.elements.quantity.value;
    tableComment.textContent = form.elements.comment.value;
    tableProduct.innerHTML = currentDescription.innerHTML;
    boxForm.style.display = 'none';
    boxTable.style.display = 'flex';
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("section2").addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const city = document.getElementById("city").value;
        const novaPoshta = document.getElementById("nova-poshta").value;
        const payment = document.querySelector(".box2-form__radio").value;
        const quantity = document.getElementById("quantity").value;
        const comment = document.getElementById("comment").value;
        if (!name || !city || !novaPoshta || !payment || !quantity || !comment) {
            event.preventDefault();
            alert("Ошибка! Вы заполнили не все обязательные поля");
            boxForm.style.display = 'flex';
            boxTable.style.display = 'none';
        }
    });
});