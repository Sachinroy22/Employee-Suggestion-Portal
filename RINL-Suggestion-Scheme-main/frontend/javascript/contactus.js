// Initialize EmailJS
emailjs.init("4lPrS6RRscok3F_hf"); // Replace with your actual public key

// Form submit handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_4905kxa", "template_5js722y", this)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        message.textContent = "Message sent successfully!";
        message.style.color = "green";
        form.reset();
      }, function (error) {
        console.error("FAILED...", error);
        message.textContent = "Something went wrong. Please try again.";
        message.style.color = "red";
      });
  });

  // Toggle mobile menu
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("show");
  });
});
