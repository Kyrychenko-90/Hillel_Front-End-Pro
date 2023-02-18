//  1. Создать функцию которая будет принимать имя пользователя и время через которое он хочет
//          чтоб его поприветствовали. Время пользователь хочет вводить строкой в разном формате
//          например '10 minutes' , '20 seconds', '1 hour', '2 hours'

function sayHi(time, name) {
    const timeArray = time.split(" ",);
    let yourNumberTime = timeArray.slice(0,1);
    let yourTime = timeArray.splice(1,1);
    yourNumberTime = yourNumberTime.join()
    yourTime = yourTime.join();
    let interval
    switch (yourTime) {
        case 'second':
        case 'seconds':
            interval = yourNumberTime * 1000;
            break;
        case 'minute':
        case 'minutes':
            interval = (yourNumberTime * 60) * 1000;
            break;
        case 'hour':
        case 'hours':
            interval = (yourNumberTime * 3600) * 1000;
            break;
        default:
            console.log("Вы не корректно ввели интервал");
    }
    setTimeout(function sayHi() {
        console.log(`Привет ${name}`);
    }, interval);
}
sayHi("10 seconds", "Alex")



//  2. Создать функцию которая будет или сериализировать или десериализировать объект в зависимости
//          от того в какой форме он был передан

const tour = {
    city: 'London',
    country: 'England',
};

function jsonStr(strOne) {
    let x
    if (typeof strOne === "object") {
        x = JSON.stringify(strOne);
    }else {
        x = JSON.parse(strOne);
    }
    console.log(x);
}
jsonStr(tour);

//  3. Создать функцию которая вернет true или false в зависимости от того что в нее
//          передать JSON строку или обычную строку

function newStr(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

