let now = new Date().toLocaleString();

if(!localStorage.getItem('first')) {
    let name = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
    localStorage.first = name;
    localStorage.data = now;
}
else {
    alert(`Добрый день, ${localStorage.first}! Давно не виделись. В последний раз вы были у нас ${localStorage.data}`);
    localStorage.data = now;
}