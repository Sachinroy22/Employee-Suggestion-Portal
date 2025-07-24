document.getElementById('suggestionForm').addEventListener('submit', async function(e) {
      e.preventDefault();

      const userId = localStorage.getItem('userId');
      if (!userId) {
        alert('You are not logged in!');
        return;
      }

      const formData = new FormData(e.target);
      const empName = formData.get('empName');
      const empID = formData.get('empID');
      const department = formData.get('department');
      const suggestion = formData.get('suggestion');
      
      


      const res = await fetch('https://rinl-suggestion-scheme.onrender.com/api/suggestion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, empName, empID, department, suggestion })
      });

      const data = await res.json();
      if (data.success) {
        document.getElementById('thankYouMsg').classList.remove('hidden');
        e.target.reset();
      } else {
        alert('Error submitting suggestion');
      }
    });
    document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("show");
  });
