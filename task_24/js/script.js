//  1. Создать функцию которая будет принимать имя пользователя и время через которое он хочет
//          чтоб его поприветствовали. Время пользователь хочет вводить строкой в разном формате
//          например '10 minutes' , '20 seconds', '1 hour', '2 hours'

const name = prompt("Введите свое имя");
const time = prompt("Введите интервал в формате, например: 10 minutes, 20 seconds, 1 hour, 2 hours");
const timeArray = time.split(" ",);
let yourNumberTime = timeArray.slice(0,1);
let yourTime = timeArray.splice(1,1);
yourNumberTime = yourNumberTime.join()
yourTime = yourTime.join();

let interval

switch (yourTime) {
    case 'second':
        interval = yourNumberTime * 1000;
        break;
    case 'seconds':
        interval = yourNumberTime * 1000;
        break;
    case 'minute':
        interval = (yourNumberTime / 60) * 1000;
        break;
    case 'minutes':
        interval = (yourNumberTime / 60) * 1000;
        break;
    case 'hour':
        interval = (yourNumberTime / 3600) * 1000;
        break;
    case 'hours':
        interval = (yourNumberTime / 3600) * 1000;
        break;
    default:
        alert("Вы не корректно ввели интервал");
}
interval = Number(interval);

setTimeout(function helloEverybody(){
    alert(`Привет ${name}`);
}, interval);

//  2. Создать функцию которая будет или сериализировать или десериализировать объект в зависимости
//          от того в какой форме он был передан

const tour = {
    city: 'London',
    country: 'England',
};

function jsonStr(strOne) {
    let x
    if (typeof jsonStr === "string") {
        x = JSON.parse(strOne);
    }else {
        x = JSON.stringify(strOne);
    }
    return console.log(x)
}
jsonStr(tour);

//  3. Создать функцию которая вернет true или false в зависимости от того что в нее
//          передать JSON строку или обычную строку

function newStr(str) {
    if (typeof str !== "string") {
        console.log("true, это JSON строка");
    }else {
        console.log("false, это обычная строка");
    }
}
newStr("Hello")
