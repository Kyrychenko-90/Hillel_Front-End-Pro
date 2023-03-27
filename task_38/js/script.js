/*
    Пишемо свій слайдер зображень.
           1. Відображаємо зображення та кнопки Next, Prev з боків від зображення.
           2. При кліку на Next - показуємо наступне зображення.
           3. При кліку на Prev - попереднє .
           4. При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.
*/

const imagesSlider = document.querySelectorAll(".slider-image");
const btmPrev = document.getElementById("slider_btm-prev");
const btmNext = document.getElementById("slider_btm-next");

let currentIndex = 0;

function activeSlider() {
    if(currentIndex === 0) {
        btmPrev.style.display = "none";
    } else {
        btmPrev.style.display = "block";
    }
    if(currentIndex === imagesSlider.length - 1) {
        btmNext.style.display = "none";
    } else {
        btmNext.style.display = "block";
    }
}

btmPrev.addEventListener("click", () => {
    imagesSlider[currentIndex].style.display = "none";
    currentIndex--;
    imagesSlider[currentIndex].style.display = "block";
    activeSlider();
})

btmNext.addEventListener("click", () => {
    imagesSlider[currentIndex].style.display = "none";
    currentIndex++;
    imagesSlider[currentIndex].style.display = "block";
    activeSlider();
})

activeSlider();