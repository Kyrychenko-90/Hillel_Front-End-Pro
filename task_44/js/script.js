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
            descriptions[productListIndex * 4 + Array.from(productList.children).indexOf(productItem)].style.display = "block";
            buyButton.style.display = "block";
        }
    });
});

buyButton.addEventListener("click", function() {
    alert("Товар куплен!");
    productLists.forEach(function(productList) {
        productList.style.display = "none";
    });
    descriptions.forEach(function(description) {
        description.style.display = "none";
    });
    buyButton.style.display = "none";
});







