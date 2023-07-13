const navId = document.getElementById("nav_menu");
const toggleBtnId = document.getElementById("toggle_btn");
const CloseBtnId = document.getElementById("btn_close");
const bannerId = document.querySelector(".wrapper");
const service = document.querySelector(".service");

toggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
  bannerId.style.opacity = 0;
  service.style.opacity = 0;
  toggleBtnId.style.display = "none";
  CloseBtnId.style.display = "block";
});
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
  bannerId.style.opacity = 1;
  service.style.opacity = 1;
  toggleBtnId.style.display = "block";
  CloseBtnId.style.display = "none";
});

const scrollAnimation = ScrollReveal({
  origin: "top",
  distance: "10px",
  duration: 1500,
  delay: 100,
});

scrollAnimation.reveal(".header");
scrollAnimation.reveal(".service", { delay: 100 });
scrollAnimation.reveal(".card", { delay: 200 });
scrollAnimation.reveal(".store", { delay: 300 });
scrollAnimation.reveal(".footer", { delay: 400 });
