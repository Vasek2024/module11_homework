// Задание 4
const inter = function (a, b) {
  let i = a;
  const intervalId = setInterval(() => {
    console.log(i);
    i++;
    if (i > b) {
      clearInterval(intervalId); 
    }
  }, 2000);
};
const btn = document.querySelector(".btnInterval");
btn.addEventListener("click", () => {
  inter(5, 15); 
});


// моё решение не верное
// const inter = function (a, b) {
//   for (let i = a; i < b + 1; i++) {
//     console.log(i);
//   }
// }
// const btn = document.querySelector(".btnInterval");
// btn.addEventListener("click", () => {
//   const intervalId = setInterval(inter, 2000, 5, 15)
//   setTimeout(function () {
//     clearInterval(intervalId)
//   }, 2000)
// });