function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

function toggleDark() {
  document.documentElement.classList.toggle("dark");
}

function openModal() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

const data = ["HTML", "CSS", "JavaScript", "Python", "VLSI", "RTL", "UVM"];

function showSuggestions() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const box = document.getElementById("suggestions");
  box.innerHTML = "";

  if (!input) {
    box.style.display = "none";
    return;
  }

  data.filter(item => item.toLowerCase().includes(input))
    .forEach(item => {
      const div = document.createElement("div");
      div.textContent = item;
      box.appendChild(div);
    });

  box.style.display = "block";
}
