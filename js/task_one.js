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

//  задание 1 вариант 2
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