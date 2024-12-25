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

  // Добавляем анимацию исчезновения текущего слайда через GSAP
  gsap.to(texts[currentIndex], { opacity: 0, duration: 0.3 });
  gsap.to(images[currentIndex], { opacity: 0, duration: 0.3 });

  // Обновляем индекс
  if (direction === "next") {
    currentIndex = (currentIndex + 1) % texts.length;
  } else if (direction === "prev") {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
  }

  // Добавляем анимацию появления нового слайда через GSAP
  gsap.to(texts[currentIndex], { opacity: 1, duration: 0.3 });
  gsap.to(images[currentIndex], { opacity: 1, duration: 0.3 });

  texts[currentIndex].classList.add("active");
  images[currentIndex].classList.add("active");

  if (currentSlide) {
    currentSlide.textContent = currentIndex + 1;
  }
}

let intervalId = setInterval(() => {
  updateSlide("next");
}, 6000);

document.querySelector(".next_btn").addEventListener("click", function () {
  clearInterval(intervalId);
  updateSlide("next");
});

document.querySelector(".previous_btn").addEventListener("click", () => {
  clearInterval(intervalId);
  updateSlide("prev");
});

// Анимация для btm_par_medium


// Анимация для .frame_text
gsap.to(".frame_text", {
  duration: 3,
  delay: 0.3,
  opacity: 1,
  ease: "ease-in-out",
  onStart: () => {
    document.querySelector(".frame_text").classList.add("frame-in-parg-right");
  },
  onComplete: () => {
    gsap.set(".frame_text", { display: "none" });
    console.log("Анимация завершена!");
  },
});


gsap.to(".btm_par_medium", {
  duration: 1,
  delay: 0.2,
  x: 0,
  opacity: 1,
  ease: "ease-in-out",
  
  
  onComplete: () => {
    gsap.delayedCall(2.5, () => {
      gsap.set(".btm_par_medium", { display: "none" });
    });
  },
});

// Анимация для btm_title
gsap.to(".btm_title", {
  duration: 1,
  delay: 0.2,
  x: 0,
  opacity: 1,
  ease: "ease-in-out",
  onComplete: () => {
    gsap.delayedCall(2.5, () => {
      gsap.set(".btm_title", { display: "none" });
    });
  },
});

// Анимация для .navigation
gsap.set(".navigation", { opacity: 0, display: "none" });
gsap.to(".navigation", {
  duration: 3.2,
  delay: 4,
  x: 0,
  opacity: 1,
  ease: "power2.inOut",
  display: "flex",
  onComplete: () => {
    console.log("Анимация завершена!");
  },
});



gsap.set(".btm_btn", { opacity: 0, display: "none" });
gsap.to(".btm_btn", {
  duration: 3.2,
  delay: 3.7,
  x: 0,
  opacity: 1,
  ease: "power2.inOut",
  display: "flex",
  onComplete: () => {
  gsap.set(".btm_btn", { display: "block" });
  },
});


// gsap.to(".overlay", {
//   duration: 1, // Длительность анимации
//   right: 0, // Перемещение в видимую область
//   ease: "power2.inOut", // Плавность
// });