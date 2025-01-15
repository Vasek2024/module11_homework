// Галирея делал по видео

// // Метод определён для объекта document и любого HTML-элемента (Element) страницы. 
// // Позволяет найти элемент по CSS-селектору среди дочерних. 
// // Если элементов несколько, то вернётся первый подходящий. 
// const slaider = document.querySelector('#slider')
// // проверяем правельность выбранного дива под слайдер
// // обращаемся по детям в блоке слайдера

// const sliderItems = Array.from(slaider.children);
// // кнопка вперёд
// const btnNext = document.querySelector('#btnNext')
// // кнопка назад
// const btnPrav = document.querySelector('#btnPrav')
// // Функция Array.from() создаёт новый массив на основе переданного объекта.
// // Объект должен быть либо массивоподобным (как строка или объект arguments),
// // либо итерируемым (как Set или Map).
// sliderItems.forEach(function(slide, index){
// // console.log(slide);

// // скрываем все слайды , кроме первого
// if(index !== 0) slide.classList.add('hidden')

// // добавляем индексы
// slide.dataset.index = index;

// // Добавляем data атрибут active для активного слайда
// sliderItems[0].setAttribute('data-active', '');

// // клик по событию
// slide.addEventListener('click', function(){
//   // скрываем текущий слайд
//   slide.classList.add('hidden');
// // 
// slide.removeAttribute('data-active');

//   // расчитываем индекс следующего слайда
//   const nextSladeIndex = index + 1 === sliderItems.length ? 0 : index + 1;

//   // if(index + 1 === sliderItems.length){
//   //   nextSladeIndex = 0;
//   // } else {
//   //   nextSladeIndex = index + 1;
//   // }
//   // console.log(nextSladeIndex);

// // const nextSladeIndex = +slide.dataset.index + 1;


// // console.log(+slide.dataset.index + 1);
// // находим следующий слайд
//   const nextSlide = slaider.querySelector(`[data-index="${nextSladeIndex}"]`);
// //  отображаем следующий слайд
//   nextSlide.classList.remove('hidden')
//   // присваиваем активному слайду атрибут
//   nextSlide.setAttribute('data-active', '');

// });
// });

// // отслеживаем клик по кнопке вперёд
// btnNext.onclick = function() {

//   // скрываем текущий слайдер
//   const currentSlide = slaider.querySelector('[data-active]');
//   // получаем индекс
//   const currentSlideIndex = +currentSlide.dataset.index;
//   // console.log(currentSlideIndex);
//   currentSlide.classList.add('hidden');
//   currentSlide.removeAttribute('data-active');

// // показываем следующий слайдер
// const nextSladeIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
// const nextSlider = slaider.querySelector(`[data-index="${nextSladeIndex}"]`);
// nextSlider.classList.remove('hidden');
// nextSlider.setAttribute('data-active', '');
// }

// // отслеживаем клик по кнопке назад
// btnPrav.onclick = function() {

//   // скрываем текущий слайдер
//   const currentSlide = slaider.querySelector('[data-active]');
//   // получаем индекс
//   const currentSlideIndex = +currentSlide.dataset.index;
//   // console.log(currentSlideIndex);
//   currentSlide.classList.add('hidden');
//   currentSlide.removeAttribute('data-active');

// // показываем следующий слайдер
// const nextSladeIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
// const nextSlider = slaider.querySelector(`[data-index="${nextSladeIndex}"]`);
// nextSlider.classList.remove('hidden');
// nextSlider.setAttribute('data-active', '');
// }