import gsap from "gsap";

// const tl = gsap.timeline({ defaults: { duration: 1 } });

// tl.from(".samsung_logo", { opacity: 0, duration: 1, delay: 1, y: 100, x: -100, ease: "power2.out" });

// const frame = document.querySelector(".frame")
// document.querySelector(".frame").addEventListener("click", () => {

//    frame.classList.add("active")
// })

const backgrounds = [
    
    "../src/img/1.png",
  "../src/img/2.png",
  "../src/img/3.png",
  "../src/img/4.png",
  "../src/img/5.png",
];

// const frameContainer = document.querySelector(".container");
// let currentBackground = 0;
// let intervalId;

// // Функция для смены фона
// function changeBackground() {
//   currentBackground = (currentBackground + 1) % backgrounds.length;
//   frameContainer.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
// }

// // Запуск автоматической смены фонов
// function startBackgroundChange() {
//   intervalId = setInterval(changeBackground, 3000); // каждые 3 секунды
// }

// // Остановка автоматической смены фонов
// function stopBackgroundChange() {
//   clearInterval(intervalId);
// }

// // Запуск автоматической смены фонов при загрузке
// startBackgroundChange();

// // При наведении мыши переходим в ручной режим
// frameContainer.addEventListener("mouseenter", () => {
//   stopBackgroundChange(); // остановим автоматическую смену
//   // Начнем вручную менять фон при взаимодействии
//   frameContainer.addEventListener("mousemove", manualBackgroundChange);
// });

// // При выходе мыши остановим ручную смену и оставим фон на текущем
// frameContainer.addEventListener("mouseleave", () => {
//   frameContainer.removeEventListener("mousemove", manualBackgroundChange);
// });

// // Функция для ручной смены фона
// function manualBackgroundChange() {
//   currentBackground = (currentBackground + 1) % backgrounds.length;
//   frameContainer.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
// }