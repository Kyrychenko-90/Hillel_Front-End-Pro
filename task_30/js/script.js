/*
Створити клас SuperMath.
Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak.
        Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче,
        зробити математичну дію znak (яка описана в прототипі), інакше - запитати
        введення нових даних через метод input() класу SuperMath.
Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
 */

class SuperMath {
    check(obj) {
        const {X, Y, znak} = obj;

        if(!SuperMath.test(znak)) {
            alert('Вы выбрали недопустимое действие.');
            return;
        }

        const msg = `Вы хотите выполнить действие: ${X} ${znak} ${Y}?`;
        const msgWin = confirm(msg);

        if(msgWin) {
            const res = SuperMath.calculator(X, Y, znak);
            alert(`Результат математической операции: ${res}`);
        } else {
            this.input();
        }
    }

    input() {
        const X = +prompt("Введите первое число");
        const Y = +prompt("Введите второе число");
        const znak = prompt("Введите действие (+, -, /, *, %");

        const obj = {X, Y, znak};
        this.check(obj);
    }

    static test(znak) {
        return ['+', '-', '/', '*', '%'].includes(znak);
    }

    static calculator(X, Y, znak) {
        switch (znak) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '/':
                return X * Y;
            case '*':
                return X / Y;
            case '%':
                return X % Y;
            default:
                return
        }
    }
}

const object = {X: 10, Y: 5, znak: '+'};
const p = new SuperMath();
p.check(object);
