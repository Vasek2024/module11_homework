// Задание 4
const inter = function (a, b) {
  for (let i = a; i<b+1; i++){
console.log(i);
  }
}
const btn = document.querySelector(".btnInterval");
btn.addEventListener("click", () => {
  const intervalId = setInterval(inter, 2000, 5, 15)
  setTimeout(function(){
    clearInterval(intervalId)
  }, 2000)
});