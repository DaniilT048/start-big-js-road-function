/*
 Ваше завдання - створити функцію greet в JavaScript. Ця функція повинна приймати два аргументи:

 msg: Рядок, який представляє привітання, наприклад “Hi”, “Hey” або “Hello”.
 name: Рядок, який представляє ім’я особи, наприклад “John”, “Bob” або “Mary”.

 Функція greet повинна повертати новий рядок, який поєднує msg та name з комою та пробілом між ними. Наприклад, якщо msg це “Hi” і name це “John”, то функція повинна повернути рядок “Hi, John”.

 Ось приклад використання цієї функції:

 console.log(greet('Hi', 'John')) // Hi, John
 console.log(greet('Hey', 'Bob')) // Hey, Bob
 console.log(greet('Hello', 'Mary')) // Hello, Mary
*/

function greetByName(msg, name) {
  return `${msg}, ${name}`;
}
let msg = 'Hi';
let name = 'John';
console.log (greetByName(msg, name)); // Hi, John

// let msg = 'Hey'
// let name = 'Bob'
// console.log (greetByName(msg, name)) // Hey, Bob

// let msg = 'Hello'
// let name = 'Mary'
// console.log (greetByName(msg, name)) // Hello, Mary