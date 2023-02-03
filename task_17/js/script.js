// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters
// довжиною length. span>
//  Наприклад:
//              const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//              const key = generateKey(16, characters);
//              console.log(key); // eg599gb60q926j8i

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
function generateKey(length, characters) {
    characters = characters.split("");
    const key = characters.map((elem) => [Math.random(), elem]).sort().map((elem) => elem[1]);
    key.length = length;
    return key.join("");
}
console.log(generateKey(16, characters));
