// Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
//      Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:
//      Такий підхід широко використовується в бібліотеках JavaScript.

let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this
    },
    down: function () {
        this.step--;
        return this
    },
    showStep: function () { // показывает текущую ступеньку
        return alert(this.step);
    }
};

ladder.up().up().down().showStep()
