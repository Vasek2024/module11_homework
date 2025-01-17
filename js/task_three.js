// Задание 3
function createAdder(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

// function example(func) {
//   let num = 20;
//   let sumNum = num + argFunc();
//   return sumNum;
// }
// function argFunc() {
//   return 2;
// }
// const resultFunc = example(argFunc);