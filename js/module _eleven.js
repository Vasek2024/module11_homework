// Задание 1
// можно ли применять такой синтаксис (сильно длинная строка вроде получилась)? (\n)
// const tall = [1, 3, 0, 32, 15, 15, 9, 3, 196, 33, null];
// function arrayNamber() {
//   const  odd = tall.filter(x => typeof x === 'number' && x % 2 !== 0).length;
// const  even = tall.filter(x => typeof x === 'number' && x % 2 === 0).length;
// const  nolNumber = tall.filter(x => typeof x === 'number' && x === 0).length;
// const  nulNumber = tall.filter(x => typeof x !== 'number' && x === null).length;

// console.log(' не чётные - ' + odd + '\n чётные - ' + even + '\n нулей - ' + nolNumber + '\n значений null - ' + nulNumber);

// const seen = new Set();
// let hasDuplicates = false;
// for (const num of tall) {
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
// };
// arrayNamber(tall);


// const tall = [1, 3, 0, 32, 10, 15, 9, 3, 196, 33, null];
// function arrayNamber() {
//   const  odd = tall.filter(x => typeof x === 'number' && x % 2 !== 0).length;
// const  even = tall.filter(x => typeof x === 'number' && x % 2 === 0).length;
// const  nolNumber = tall.filter(x => typeof x === 'number' && x === 0).length;
// const  nulNumber = tall.filter(x => typeof x !== 'number' && x === null).length;
// console.log('не чётные - ' + odd);
// console.log('чётные - ' + even);
// console.log('нулей - ' + nolNumber);
// console.log('значений null - ' + nulNumber);
// const seen = new Set();
// let hasDuplicates = false;
// for (const num of tall) {
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
// };
// arrayNamber(6);


// Задание 2 такой ватиант лучше нижнего?
// как по мне, нижний более читаем (но это наверное для новичка!)

// const result = (a) => {
//   let reultConditions = (typeof a !== 'number' || a < 1 ) ? 'Введите натуральное число':
//   (a >= 1001) ? ('Введено большое значение') : "Ок. Значение от 1 до 1000";
//   console.log (reultConditions);
// }
// result(1001);

// Задание 2  вариант 2

// const result = (a) => {
//   if (typeof a !== 'number' || a < 1 ){
//   console.log ('Введите натуральное число');
//   } else if (a >= 1001){
//     console.log ('Введено большое значение');
//   } else {
// console.log ("Ок. Значение от 1 до 1000");
//   }
// }
// result(null);


// Задание 3
// function example(func){
//   let num = 20;
//   let sumNum = num + argFunc();
//     return sumNum;
// } 
// function argFunc(){
// return 2;
// }
// const resultFunc = example(argFunc);
// console.log(resultFunc);


// Задание 4
// const inter = function (a, b) {
//   // console.log(a + b);
//   for (let i = a; i<b+1; i++){
// console.log(i);
//   }
// }
// const intervalId = setInterval(inter, 2000, 5, 15)
// setTimeout(function(){
//   clearInterval(intervalId)
// }, 2000)


// Задание 5
// можно ли в return задать console.log()  ?
// const result = (a, b) => {
// if (typeof a !== 'number' || typeof b !== "number" || a < 1 || b < 1){
// return console.log ('Введите натуральные числа');
// } else {
// let power = Math.pow(a, b);
// return console.log(power);
// }}
// result(7, "8");