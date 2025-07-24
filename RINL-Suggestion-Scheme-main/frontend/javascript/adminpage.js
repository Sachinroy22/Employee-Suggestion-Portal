async function fetchSuggestions() {
  const res = await fetch('https://rinl-suggestion-scheme.onrender.com/api/all-suggestions');
  const suggestions = await res.json();

  const empList = document.getElementById('empList');
  empList.innerHTML = '';

  if (!Array.isArray(suggestions) || suggestions.length === 0) {
    empList.textContent = "No suggestions found.";
    return;
  }

  const grouped = {};
  suggestions.forEach(s => {
    if (!s.empID) return;
    if (!grouped[s.empID]) grouped[s.empID] = [];
    grouped[s.empID].push(s);
  });

  Object.entries(grouped).forEach(([empID, records]) => {
    const item = document.createElement('div');
    item.className = 'suggestion-block';
    item.innerHTML = `
      <strong>Employee ID:</strong> ${empID}<br/>
      <strong>Name:</strong> ${records[0].empName}<br/>
      <strong>Department:</strong> ${records[0].department}<br/>
      <strong>Suggestions:</strong>
      <ul>${records.map(r => `<li>${r.suggestion}</li>`).join('')}</ul>
    `;
    empList.appendChild(item);
  });
}


document.addEventListener('DOMContentLoaded', fetchSuggestions);
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("show");
  });
