const
page = document.querySelector('#page'),
limit = document.querySelector('#limit'),
submit = document.querySelector('#submit'),
div = document.querySelector('div');

function f() {
    for(var i = 0; i < localStorage.length; i++) {
        var img = document.createElement('img');
        img.src = localStorage[localStorage.key(i)];
        img.alt = "Picture";
        div.appendChild(img);
    }
}

submit.addEventListener('click', () => {
    fetch("https://picsum.photos/v2/list?page=" + page.value + "&limit=" + limit.value)
    .then((response) => {return response.json();})
    .then((data) => {
        div.innerHTML = '';
        localStorage.clear();
        for (var i = 0; i < data.length; i++) {
            localStorage[i] = data[i]['download_url'];
        }
        f();
    })
    .catch(() => {alert('error')});
});

f();