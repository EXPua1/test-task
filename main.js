import { gsap } from "./node_modules/gsap/index.js";
const texts = document.querySelectorAll(".frame_text");
const currentSlide = document.querySelector(".currentSlide_js");
const images = document.querySelectorAll(
  ".gallery .frame, .gallery .frame_collection"
);

const totalSlidesWrapper = document.querySelector(".totalSlides_js");

let currentIndex = 0;

const totalSlides = texts.length;

currentSlide.textContent = currentIndex + 1;
totalSlidesWrapper.textContent = totalSlides;

texts[currentIndex].classList.add("active");
images[currentIndex].classList.add("active");
function updateSlide(direction) {
  texts[currentIndex].classList.remove("active");
  images[currentIndex].classList.remove("active");

  if (direction === "next") {
    currentIndex = (currentIndex + 1) % texts.length;
    texts[currentIndex].style.animation =
      "frame-in-parg-right 0.3s ease-in-out";
  } else if (direction === "prev") {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
  }

  texts[currentIndex].classList.add("active");
  images[currentIndex].classList.add("active");

  if (currentSlide) {
    currentSlide.textContent = currentIndex + 1;
  }
}

let intervalId = setInterval(() => {
  texts[currentIndex].style.animation = "frame-in-parg-left 0.3s ease-in-out";
  updateSlide("next");
}, 6000);

document.querySelector(".next_btn").addEventListener("click", function () {
  clearInterval(intervalId);
  updateSlide("next");

  texts[currentIndex].style.animation = "frame-in-parg-right 0.3s ease-in-out";
});

document.querySelector(".previous_btn").addEventListener("click", () => {
  clearInterval(intervalId);
  updateSlide("prev");
  texts[currentIndex].style.animation = "frame-in-parg-left 0.3s ease-in-out";
});

gsap.to(".btm_par_medium", {
  duration: 3,
  delay: 0.3,
  x: 0,
  opacity: 1,
  ease: "ease-in-out",
  onComplete: () => {
    gsap.set(".btm_par_medium", { display: "none" });
  },
});

gsap.to(".frame_text", {
  duration: 3, // Длительность анимации
  delay: 0.3, // Задержка перед началом анимации
  opacity: 1, // Видимость
  ease: "ease-in-out", // Плавное замедление
  onStart: () => {
    // Применяем класс с анимацией при старте анимации
    document.querySelector(".frame_text").classList.add("frame-in-parg-right");
  },
  onComplete: () => {
    // После завершения анимации скрываем элемент
    gsap.set(".frame_text", { display: "none" });
    console.log("Анимация завершена!");
  },
});

gsap.to(".btm_title", {
  duration: 3, // Длительность анимации
  delay: 0.3, // Задержка перед началом анимации
  x: 0, // Перемещение на место (аналог transform: translateX(0))
  opacity: 1, // Видимость
  ease: "ease-in-out", // Плавное замедление
  onComplete: () => {
    // По завершению анимации скрываем элемент
    gsap.set(".btm_title", { display: "none" });
  },
});

gsap.set(".navigation", { opacity: 0, display: "none" });

// Анимация для появления и перемещения
gsap.to(".navigation", {
  duration: 3.2, // Длительность анимации
  delay: 3, // Задержка перед началом анимации
  x: 0, // Перемещение на место (аналог transform: translateX(0))
  opacity: 1, // Плавное изменение прозрачности (с 0 до 1)
  ease: "power2.inOut", // Плавное замедление
  display: "flex", // Сделаем элемент видимым (display: flex)
  onComplete: () => {
    // Можно добавить любое действие по завершению анимации
    console.log("Анимация завершена!");
  },
});
