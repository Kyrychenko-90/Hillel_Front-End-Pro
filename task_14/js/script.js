// Дан масив об'єктів. Вивести масив телефонних номерів користувачів,
//      у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів.

let users = [
    {
        index: 0,
        isActive: true,
        balance: "$2,226.60",
        name: "Eugenia Sawyer",
        gender: "female",
        phone: "+1 (840) 583-3207",
        address: "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        index: 1,
        isActive: true,
        balance: "$2,613.77",
        name: "Pauline Gallegos",
        gender: "female",
        phone: "+1 (985) 593-3328",
        address: "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        index: 2,
        isActive: false,
        balance: "$3,976.41",
        name: "Middleton Chaney",
        gender: "male",
        phone: "+1 (995) 591-2478",
        address: "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        index: 3,
        isActive: true,
        balance: "$1,934.58",
        name: "Burns Poole",
        gender: "male",
        phone: "+1 (885) 559-3422",
        address: "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        index: 4,
        isActive: true,
        balance: "$3,261.65",
        name: "Mcfadden Horne",
        gender: "male",
        phone: "+1 (942) 565-3988",
        address: "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        index: 5,
        isActive: false,
        balance: "$1,790.56",
        name: "Suzette Lewis",
        gender: "female",
        phone: "+1 (837) 586-3283",
        address: "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]

users[0].balance = users[0].balance.replace(/,/g, '');
users[1].balance = users[1].balance.replace(/,/g, '');
users[2].balance = users[2].balance.replace(/,/g, '');
users[3].balance = users[3].balance.replace(/,/g, '');
users[4].balance = users[4].balance.replace(/,/g, '');
users[5].balance = users[5].balance.replace(/,/g, '');
users[0].balance = users[0].balance.slice(1);
users[1].balance = users[1].balance.slice(1);
users[2].balance = users[2].balance.slice(1);
users[3].balance = users[3].balance.slice(1);
users[4].balance = users[4].balance.slice(1);
users[5].balance = users[5].balance.slice(1);

const overBalanceUsers = users.filter((elem) => {
    return elem.balance > 2000.00;
})

const phoneUsers = overBalanceUsers.map((elem) => {
    return elem.phone;
})
console.log(phoneUsers);

const allBalanceUsers = users.map((elem) => {
    return elem.balance;
})

const sumBalanceUsers = allBalanceUsers.map((elem) => {
    return elem * 1;
})

const sumAllBalanceUsers = sumBalanceUsers.reduce((acc, current) => {
    return acc + current;
})
console.log(`Сума всіх балансів користувачів: ${sumAllBalanceUsers.toFixed(2)}`);


