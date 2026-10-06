const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle) {
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("quote-form");
form.addEventListener("submit", () => {
  setTimeout(() => {
    alert("Thank you! Your email app should open with your quote request.");
  }, 100);
});
