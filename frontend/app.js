let currentPage = 1;

const API_URL = "http://localhost:3000/api/users";

async function fetchUsers() {
  try {
    document.getElementById("users").innerHTML = "Loading...";

    const res = await fetch(`${API_URL}?page=${currentPage}`);
    const data = await res.json();

    displayUsers(data.data);
    document.getElementById("page").innerText = `Page ${currentPage}`;

  } catch (error) {
    document.getElementById("users").innerHTML = "❌ Failed to load data";
  }
}

function displayUsers(users) {
  const container = document.getElementById("users");
  container.innerHTML = "";

  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p class="email">${user.email}</p>
    `;

    container.appendChild(card);
  });
}

function nextPage() {
  currentPage++;
  fetchUsers();
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    fetchUsers();
  }
}

fetchUsers();