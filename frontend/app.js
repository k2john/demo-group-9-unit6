const usersGrid = document.getElementById("usersGrid");
const statusText = document.getElementById("status");
const pageBadge = document.getElementById("pageBadge");
const currentPageValue = document.getElementById("currentPageValue");
const usersShownValue = document.getElementById("usersShownValue");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const refreshBtn = document.getElementById("refreshBtn");

let currentPage = 1;

async function loadUsers(page) {
  statusText.textContent = "Loading users...";
  usersGrid.innerHTML = "";

  try {
    const response = await fetch(`/api/users?page=${page}`);

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const result = await response.json();
    const users = result.data || [];

    currentPage = result.page || page;
    currentPageValue.textContent = String(currentPage);
    usersShownValue.textContent = String(users.length);
    pageBadge.textContent = `Page ${currentPage}`;

    if (users.length === 0) {
      statusText.textContent = "No users found on this page.";
      prevBtn.disabled = currentPage <= 1;
      nextBtn.disabled = true;
      return;
    }

    statusText.textContent = "Showing API data with a cleaner view.";

    users.forEach((user) => {
      const card = document.createElement("article");
      card.className = "user-card";
      card.innerHTML = `
        <span class="user-id">ID ${user.id}</span>
        <h3 class="user-name">${user.name}</h3>
        <p class="user-email">${user.email}</p>
      `;
      usersGrid.appendChild(card);
    });

    prevBtn.disabled = currentPage <= 1;
    nextBtn.disabled = users.length < 5;
  } catch (error) {
    statusText.textContent = "Could not load users. Please try again.";
    prevBtn.disabled = currentPage <= 1;
    nextBtn.disabled = true;
  }
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    loadUsers(currentPage - 1);
  }
});

nextBtn.addEventListener("click", () => {
  loadUsers(currentPage + 1);
});

refreshBtn.addEventListener("click", () => {
  loadUsers(currentPage);
});

loadUsers(currentPage);
