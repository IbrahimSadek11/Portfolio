const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark-theme");

  themeToggle.innerHTML = document.body.classList.contains("dark-theme")
    ? '<i class="fa-notdog fa-solid fa-sun"></i>'
    : '<i class="fa-sharp fa-solid fa-moon"></i>';
});


let visits = localStorage.getItem("visitCount");

if (visits === null) {
    visits = 0;
}
visits++;

localStorage.setItem("visitCount", visits);

document.getElementById("visit-counter").textContent =
   `You have visited this page ${visits} times.`;



document.querySelectorAll("#header a").forEach(link => {
  link.addEventListener("click", function() {
      document.querySelectorAll("#header a").forEach(nav => nav.classList.remove("active"));
      this.classList.add("active");
    });
});

