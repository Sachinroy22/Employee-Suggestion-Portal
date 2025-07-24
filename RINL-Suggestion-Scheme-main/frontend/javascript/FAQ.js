// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Toggle mobile nav menu
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("show");
  });
});
