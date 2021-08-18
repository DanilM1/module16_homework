const
input = document.querySelector('input'),
p = document.querySelector('p'),
select = document.querySelector('select');

var buf = "";

input.addEventListener('click', () => {
    if (+select.value > 2016) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', 'https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440', true);
        xhr.onload  = function() {
            buf = xhr.response;
        };
        xhr.send(null);
        for (var key in buf) {
            if (buf[key]['year'] === +select.value) {
                p.innerHTML = select.value;
                document.getElementById('one').innerHTML = buf[key]['sales']['q1'];
                document.getElementById('two').innerHTML = buf[key]['sales']['q2'];
                document.getElementById('three').innerHTML = buf[key]['sales']['q3'];
                document.getElementById('four').innerHTML = buf[key]['sales']['q4'];
                document.querySelector('a').href = `https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${p.innerHTML} год',data:[${buf[key]['sales']['q1']},${buf[key]['sales']['q2']},${buf[key]['sales']['q3']},${buf[key]['sales']['q4']}]}]}}`;
                select.value = select[0].value;
                break;
            }
        }
    }
});