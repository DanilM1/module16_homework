const
id = document.querySelector('#number'),
submit = document.querySelector('#submit'),
div = document.querySelector('div');

submit.addEventListener('click', () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id.value + "/todos")
    .then((response) => {return response.json();})
    .then((data) => {
        const ul = document.createElement('ul');
        var li = document.createElement('li');
        li.innerHTML = "id: " + id.value;
        li.style.listStyle = "none";
        ul.appendChild(li);
        for (var key in data) {
            var li = document.createElement('li');
            li.innerHTML = data[key]['title'];
            if (data[key]['completed'] === true) li.style.textDecoration = "line-through";
            ul.appendChild(li);
        }
        div.appendChild(ul);
        id.value = 0;
    })
    .catch(() => {alert('Пользователь с указанным id не найден')});
});