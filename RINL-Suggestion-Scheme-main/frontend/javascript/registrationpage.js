document.getElementById('registerForm').addEventListener('submit', async function(e) {
      e.preventDefault();

      const formData = new FormData(e.target);
      const name = formData.get('name');
      const email = formData.get('email');
      const password = formData.get('password');
      const confirmPassword = formData.get('confirmPassword');
      const mobile = formData.get('mobile');

      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      const res = await fetch('https://rinl-suggestion-scheme.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, mobile })
      });

      const data = await res.json();
      if (data.success) {
        alert('Registration successful! Redirecting to login.');
        window.location.href = '../index.html';
      } else {
        alert(data.error || 'Registration failed!');
      }
    });
    document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("show");
  });
