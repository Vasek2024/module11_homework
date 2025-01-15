// ЗАДАНИЕ №1
// принимаем аргумент (значение)
// let result = prompt('Введите число');
// if (typeof +result !== 'number') {
//   alert('Упс, кажется, вы ошиблись')
// } else if (result == '') {
//   alert('Упс, кажется вы забыли ввести значения)')
// } else if (isNaN(result) === true) {
//   alert('Упс, кажется, вы ошиблись (ввели не числовое значение)')
// } else if (result % 2 === 0) {
//   alert('Число четное')
// } else {
//   alert('число нечетное')
// }



// Задание №2
// let resul = true;
// switch (typeof resul) {
//   case ('number'):
//       alert('number');
//       break;
//   case ("string"):
//     alert("string");
//       break;
//   case ("boolean"):
//     alert("boolean");
//       break;
//   default:
//       alert("Тип x не определён");
//       console.log( resul)
// }



// Задание 3
// let str = 'Hello';
// let res = str.split('').reverse().join('');
// separator = res.split("");
// separator[separator.length - 1] = (separator[separator.length - 1].toUpperCase());
// console.log(separator.join(""));



// Задание 4
// let res = Math.floor(Math.random() * 101)
// console.log(res);



// Задание 5
// const arr = ["Ветер", "Дождь", "Огонь"];
// let concat = "колличество элементов в массиве - "
// console.log(concat + arr.length);
// arr.forEach(function(entry) {
//     console.log(entry);
// });




// Задание 6    Если есть одинаковые значения в массиве.
// почему то выводятся оба сообщения !!!

// const arr = [22, 52, 522, 222, 221, 5];
// const seen = new Set();
// let hasDuplicates = false;
// for (const num of arr) {
//   if (seen.has(num)) {
//     console.log(`Есть одинаковые значения (${num})`);
//     hasDuplicates = true;
//   } else {
//     seen.add(num);
//   }
// }
// if (!hasDuplicates) {
//   console.log('Одинаковых значений нет');
// }


// const arr = [53, 52, 522, 22, 22, 5];
// for(let i = 0; i < arr.length; i++) {
// if(arr[i-1] === arr[i]) {
// console.log(`есть одинаковые значения (`+ arr[i]+`)`);
// } 
// }


// Задание 7
// var tall = [0, 4, 3, 3, 1, 15, 7, 4, 19, 19, null];
//     odd = tall.reduce(function (r, a) { return r + a % 2; }, 0),
//     even = tall.length - odd;
// console.log('не чётные - '+ odd);
// console.log('чётрые - '+ even);

// for(let i = 0; i < tall.length; i++) {
// if(tall[i] === 0){
//   console.log(`есть значения равное нулю !`);
// } else if(tall[i] === null){
//   console.log(`есть значения с индексом "null" !`);
// } else if(tall[i-1] === tall[i]) {
// console.log(`есть одинаковые значения (`+ tall[i]+`)`);
// } 
// }



// Задание 8
// const arrMap = new Map([ ['красный', 'яблоко'], ['зелёный', 'арбуз'], ['жёлтый', 'дыня'], ['золотистый', 'лук'], ['бурый', 'свекла'] ]);
// console.log(arrMap.size +` - начений в ассоциативном массиве!`);
// for (let color of arrMap){
//   console.log(color);