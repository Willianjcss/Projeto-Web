
// Função para filtrar produtos com base na pesquisa
function filterProducts() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.produto');

    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

// Adiciona evento de input à barra de pesquisa
document.getElementById('search-bar').addEventListener('input', filterProducts);



document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userId = document.getElementById('userId');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const userTable = document.getElementById('userTable').querySelector('tbody');

    let users = [];

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const id = userId.value;
        const name = nameInput.value;
        const email = emailInput.value;

        if (id) {
            // Update user
            users = users.map(user => user.id === id ? { id, name, email } : user);
        } else {
            // Create new user
            const newUser = {
                id: Date.now().toString(),
                name,
                email
            };
            users.push(newUser);
        }

        userId.value = '';
        nameInput.value = '';
        emailInput.value = '';

        renderUsers();
    });

    function renderUsers() {
        userTable.innerHTML = '';

        users.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button onclick="editUser('${user.id}')">Edit</button>
                    <button class="delete" onclick="deleteUser('${user.id}')">Delete</button>
                </td>
            `;
            userTable.appendChild(tr);
        });
    }

    window.editUser = (id) => {
        const user = users.find(user => user.id === id);
        userId.value = user.id;
        nameInput.value = user.name;
        emailInput.value = user.email;
    };

    window.deleteUser = (id) => {
        users = users.filter(user => user.id !== id);
        renderUsers();
    };
});
