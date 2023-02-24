//  1.Создать функцию которая будет принимать миллисекунды и вернет true или false
//      в зависимости от того сегодня ли то число которое было передано

const checkDate = (mSec1) => {
    const yourDate = new Date(mSec1);
    const today = new Date();
    return yourDate.getDay() === today.getDay() && yourDate.getMonth() === today.getMonth() && yourDate.getFullYear() === today.getFullYear();
}
console.log(checkDate(1677231208631));

//  2.Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды

const returnDate = (mSec2) => {
    const yourDate = new Date(mSec2);
    const date = yourDate.getDate().toString().padStart(2, "0");
    const month = (yourDate.getMonth() + 1).toString().padStart(2, "0");
    const year = yourDate.getFullYear();
    const hour = yourDate.getHours().toString().padStart(2, "0");
    const minutes = yourDate.getMinutes().toString().padStart(2, "0");
    return `${date}.${month}.${year} ${hour}:${minutes}`;
}
console.log(returnDate(1677231208631));

//  3.Создать функцию которая принимает миллисекунды и вернет количество времени
//      которое прошло или должно пройти с текущего момента.

const lastDate = (mSec3) => {
    const yourDate = new Date(mSec3);
    const today = new Date();
    const difference = yourDate.getTime() - today.getTime();
    const differenceSec = Math.floor(difference / 1000);
    return differenceSec > 0 ? `Прошло уже ${differenceSec} секунд` : `Должно пройти еще ${Math.abs(differenceSec)} секунд`;
}
console.log(lastDate(1677231208631));
