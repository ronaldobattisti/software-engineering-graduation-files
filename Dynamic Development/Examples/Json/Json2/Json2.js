fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())//this line by default
    .then(data => {
        fillList(data);
    })

function fillList(data) {
    const listContainer = document.getElementById('list-conteiner');
    const ul = document.createElement('ul');
    data.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element.name;//this name comes from JSON HTTP
        ul.appendChild(li);
    });

    listContainer.appendChild(ul);
}