const promise = new Promise((resolve, reject) => {
    var buf = setTimeout(() => {
        Math.floor(Math.random() * 101);
    }, 3000);
    if (buf % 2 > 0) reject(buf);
    else resolve(buf);
});
  
promise

.then((buf) => {
  console.log(`Завершено успешно. Сгенерированное число — ${buf}`);
})

.catch((buf) => {
    console.log(`Завершено с ошибкой. Сгенерированное число — ${buf}`);
});