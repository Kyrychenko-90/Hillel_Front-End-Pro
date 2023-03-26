//  На сторінці є дві кнопки. - переадресовується на інший сайт
//  (за раніше введеним посиланням). Реалізувати перевірку на http/https.
//  Якщо протокол не вказаний - додаємо


const btm = document.querySelectorAll(".btm");

btm.forEach(button => {
    button.addEventListener("click", event => {
        const href = button.getAttribute("data-href");
        if (!href.includes("http://") && !href.includes("https://")) {
            location.href = `https://${href}`;
        } else {
            location.href = href;
        }
    });
});



