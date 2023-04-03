/*
    Реалізовуємо форму для реєстрації.
        Поля:
                Ім'я, Прізвище (Текстові поля)
                Дата народження (Текстове поле)
                Стать (radio)
                Місто (select)
                Адреса (textarea)
                Мови, якими володіє (checkbox)
                Кнопка “Зберегти”
За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.
 */

const form = document.querySelector('.form');
const tableFirstName = document.querySelector('#table_first-name');
const tableLastName = document.querySelector('#table_last-name');
const tableGender = document.querySelector('#table-gender');
const tableCity = document.querySelector('#table-city');
const tableAddress = document.querySelector('#table-address');
const tableLanguage = document.querySelector('#table-language');
const submitBtn = document.querySelector('#btn-submit');
const boxForm = document.querySelector('.box-form');
const boxTable = document.querySelector('.box-table');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    tableFirstName.textContent = form.elements['first-name'].value;
    tableLastName.textContent = form.elements['last-name'].value;
    tableGender.textContent = form.elements.gender.value;
    tableCity.textContent = form.elements.city.value;
    tableAddress.textContent = form.elements.address.value;
    tableLanguage.textContent = '';
    const languages = form.querySelectorAll('[name="language"]:checked');
    for (let i = 0; i < languages.length; i++) {
        tableLanguage.textContent += languages[i].value + ' ';
    }
    boxForm.style.display = 'none';
    boxTable.style.display = 'flex';
});

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    form.submit();
})





