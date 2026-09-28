const status = document.querySelector("#status");
const userList = document.querySelector("#user-list");
const searchInput = document.querySelector("#input");
const retryButton = document.querySelector("#retry");

let users = [];

async function getUsers() {
    status.textContent = "Loading...";

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    status.textContent = "";

    return data;
}

function renderUsers(usersToRender) {
    userList.innerHTML = "";

    if (usersToRender.length === 0) {
        status.textContent = "Users not found";
        return;
    }

    status.textContent = "";

    usersToRender.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
    });
}

async function loadUsers() {
    try {
        users = await getUsers();
        renderUsers(users);
    } catch (error) {
        status.textContent = "Failed to load users";
        console.error(error);
    }
}

searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
    );

    renderUsers(filteredUsers);
});

retryButton.addEventListener("click", () => {
    loadUsers();
});

loadUsers();