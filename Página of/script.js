

//**********metodo para consumir api ***************/
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    const tableBody = document.getElementById('tableBody');
    data.forEach(users => {
        const row = `<tr>
                        <td>${users.id}</td>
                        <td>${users.name}</td>
                        <td>${users.username}</td>
                        <td>${users.email}</td>
                     </tr>`;
        tableBody.innerHTML += row;
    });
})
.catch(error => console.error('Error al consumir la API:', error));

