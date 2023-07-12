const navId = document.getElementById("nav_menu");
const toggleBtnId = document.getElementById("toggle_btn");
const CloseBtnId = document.getElementById("btn_close");

toggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
  toggleBtnId.style.display = "none";
  CloseBtnId.style.display = "block";
});
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
  toggleBtnId.style.display = "block";
  CloseBtnId.style.display = "none";
});
