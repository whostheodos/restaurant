const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const form = document.querySelector("form");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const payload = {
    name: document.getElementById("name").value,
    familyName: document.getElementById("familyName").value,
    date: document.getElementById("date").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value
    };
  fetch("https://script.google.com/macros/s/AKfycbyhEJVcus2cfvSMlOeomv7tRp2BzhwT1OwiWK2mNHztQVmPRDdqbQRS8J8nZbZHB_n-5w/exec", {
    method: "POST",
    body: JSON.stringify(payload)
  }).then(() => alert("Reservation confirmed!"));
});