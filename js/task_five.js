// Задание 5
const result = (a, b) => {
  if (typeof a !== 'number' || typeof b !== "number" || a < 1 || b < 1) {
    return console.log('Введите натуральные числа');
  } else {
    let power = Math.pow(a, b);
    return console.log(power);
  }
}