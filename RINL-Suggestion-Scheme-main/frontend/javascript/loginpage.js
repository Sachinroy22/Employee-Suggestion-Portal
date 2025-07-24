function toggleRegister() {
  const selectedRole = document.querySelector('input[name="role"]:checked').value;
  const registerLine = document.getElementById('registerLine');
  registerLine.style.display = selectedRole === 'employee' ? 'flex' : 'none';
}

// Run toggleRegister when page loads
window.onload = toggleRegister;

async function validateLogin(event) {
  event.preventDefault(); // Prevent default form submit

  const role = document.querySelector('input[name="role"]:checked').value;
  const email = document.getElementById("userID").value;
  const password = document.getElementById("userPass").value;

  if (role === "admin") {
    // Hardcoded admin check
    if (email === "admin@rinl.com" && password === "Admin123") {
      window.location.href = "../html/adminpage.html";
    } else {
      alert("Invalid Admin credentials!");
    }
  } else {
    // Employee login via server
    try {
      const response = await fetch('https://rinl-suggestion-scheme.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('userId', data.userId); // Save user ID
        window.location.href = '../html/suggestionpage.html'; // Redirect to suggestion page
      } else {
        alert(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error. Please try again later.");
    }
  }

  return false; // Prevent form default submit
}
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("show");
  });
