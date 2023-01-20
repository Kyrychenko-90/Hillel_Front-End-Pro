/*
Частина №1
    Створити скрипт яки повинен виконувати наступне:
        * запитати у користувача рік народження;
        * запитати в нього, в якому місті він живе;
        * запитати його улюблений вид спорту.

    При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
        * його вік;
        * якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..."
            і на місце точок підставляємо країну, столицею якої є місто.
            Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.

Частина №2
    Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту,
        то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.

    Все це має бути відображено в одному вікні (алерті).

    Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода,
        що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .
 */

const yearOfBirth = prompt('Введіть свій рік народження');

let year;

switch (yearOfBirth && String(+yearOfBirth)) {
    case null:
        alert('Шкода, що Ви не захотіли ввести свій рік народження');
        break;
    case '':
        alert('Ви нічого не ввели');
        break;
    case 'NaN':
        alert('Ви ввели не число');
        break;
    default:
        year = 2023 - yearOfBirth;
}

year === undefined ? year = '' : year = `Тобі ${year}`;

const city = prompt('В якому місті Ви живете?');

let capital;

switch (city) {
    case null:
        alert('Шкода, що Ви не захотіли ввести своє місто');
        break;
    case '':
        alert('Ви нічого не ввели');
        break;
    case 'Київ':
        capital = 'Ти живеш у столиці України';
        break;
    case 'Вашингтон':
        capital = 'Ти живеш у столиці США';
        break;
    case 'Лондон':
        capital = 'Ти живеш у столиці Великобританії';
        break;
    default:
        capital = `Ти живеш у місті ${city}`;
}
capital === undefined ? capital = '' : capital;

let sport = prompt('Ваш улюблений вид спорту?');

let athlete;

switch (sport) {
    case null:
        alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');
        break;
    case '':
        alert('Ви нічого не ввели');
        break;
    case 'Футбол':
        athlete = 'Круто! Хочеш стати Роналду?';
        break;
    case 'Бокс':
        athlete = 'Круто! Хочеш стати Тайсоном?';
        break;
    case 'Баскетбол':
        athlete = 'Круто! Хочеш стати Джеймсом?';
        break;
    default:
        athlete = `Ви обрали ${sport}`;
}

athlete === undefined ? athlete = '' : athlete;

alert(`${year} \n${capital} \n${athlete}`);