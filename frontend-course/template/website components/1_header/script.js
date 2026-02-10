// Dark Mode
function toggleDark() {
  document.documentElement.classList.toggle("dark");
}

// Mobile Menu
function toggleMobile() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// Login Modal
function openModal() {
  document.getElementById("loginModal").classList.remove("hidden");
  document.getElementById("loginModal").classList.add("flex");
}

function closeModal() {
  document.getElementById("loginModal").classList.add("hidden");
}

// Search Suggestions
const data = ["HTML", "CSS", "JavaScript", "Python", "VLSI", "RTL", "UVM"];

function showSuggestions() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const box = document.getElementById("suggestions");
  box.innerHTML = "";

  if (!input) {
    box.classList.add("hidden");
    return;
  }

  const matches = data.filter(item => item.toLowerCase().includes(input));

  matches.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item;
    div.className = "px-4 py-2 hover:bg-gray-200 cursor-pointer";
    box.appendChild(div);
  });

  box.classList.remove("hidden");
}
