/*
Вам потрібно зробити конструктор сутності "Студент".
Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
    І є можливість отримати вік студента та його середній бал – це методи.
Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений,
    але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present()
    на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false.
    Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
    Масив – це властивість, present та absent – методи.
Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
    і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
    якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.
 */

class Student {
    constructor(firstName, lastName, yearBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearBirth = yearBirth;
        this.ratingsArray = [];
        this.attendance = Array(25).fill(null);
    }
    age() {
        const today = new Date().getFullYear();
        return today - this.yearBirth
    }
    averageRating() {
        const sum = this.ratingsArray.reduce((acc, current) => acc + current);
        return sum / this.ratingsArray.length;
    }

    present() {
        this.attendanceCheck(true);

    }
    absent() {
        this.attendanceCheck(false);
    }

    attendanceCheck(check) {
        const lastIndex = this.attendance.length - 1;
        for (let i = 0; i < lastIndex; i++) {
            if(this.attendance[i] === null) {
                this.attendance[i] = check;
                return
            }
        }
    }

    summary() {
        const averageRating = this.averageRating();
        const attendance = this.attendance.filter((elem) => elem !== null && elem === true).length;
        const attendanceRating = (attendance / this.attendance.filter((elem) => elem !== null).length) * 100;

        if(averageRating > 90 && attendanceRating > 90) {
            console.log("Молодець!");
        }else if(averageRating > 90 || attendanceRating > 90) {
            console.log("Добре, але можна краще");
        }else console.log("Редиска!");
    }
}

const student1 = new Student("Макс", "Шевченко", 2000);
const student2 = new Student("Олег", "Іванов", 2001);
const student3 = new Student("Сергій", "Дроздов", 2002);

console.log(`Ім'я: ${student1.firstName}, Прізвище: ${student1.lastName}, рік народження: ${student1.yearBirth}`);
student1.age();
console.log(`Вік студента ${student1.firstName} ${student1.lastName}: ${student1.age()}`);
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.ratingsArray.push(99, 88, 90, 95, 91);
console.log(`Середня оцінка студента ${student1.firstName} ${student1.lastName}: ${student1.averageRating()}`)
student1.summary();

console.log(`Ім'я: ${student2.firstName}, Прізвище: ${student2.lastName}, рік народження: ${student2.yearBirth}`);
student2.age();
console.log(`Вік студента ${student2.firstName} ${student2.lastName}: ${student2.age()}`);
student2.present();
student2.present();
student2.present();
student2.present()
student2.absent()
student2.ratingsArray.push(90, 95, 87, 98, 87);
console.log(`Середня оцінка студента ${student2.firstName} ${student2.lastName}: ${student2.averageRating()}`)
student2.summary();

console.log(`Ім'я: ${student3.firstName}, Прізвище: ${student3.lastName}, рік народження: ${student3.yearBirth}`);
student3.age();
console.log(`Вік студента ${student3.firstName} ${student3.lastName}: ${student3.age()}`);
student3.present();
student3.present();
student3.present();
student3.absent()
student3.absent()
student3.ratingsArray.push(90, 92, 90, 88, 89);
console.log(`Середня оцінка студента ${student3.firstName} ${student3.lastName}: ${student3.averageRating()}`)
student3.summary();
