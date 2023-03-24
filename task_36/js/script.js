// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
// Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

const imgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

function getImgRandom() {
    const randomNumberImg = Math.floor(Math.random() * imgArray.length);
    return imgArray[randomNumberImg];
}

const imageRandom = document.getElementById("img-random");

const imgRandom = getImgRandom();

imageRandom.src = `./img/${imgRandom}`;