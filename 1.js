const parser = new DOMParser();

const xmlString = '<list><student><name lang="en"><first>Ivan</first><second>Ivanov</second></name><age>35</age><prof>teacher</prof></student><student><name lang="ru"><first>Петр</first><second>Петров</second></name><age>58</age><prof>driver</prof></student></list>';

const doc = parser.parseFromString(xmlString, "application/xml");

let list = [], buf = [], date = [];

const all = doc.all;

let n = all.length;

for (var i = 0; i < n; i++) {
    if (all[i].firstElementChild === null) {
        buf = [];
        buf.push(all[i].parentElement.tagName);
        buf.push(all[i].tagName);
        buf.push(all[i].textContent);
        list.push(buf);

    }
    if (all[i].attributes.length > 0) {
        buf = [];
        buf.push(all[i].tagName);
        buf.push(all[i].attributes.lang.name);
        buf.push(all[i].attributes.lang.textContent);
        list.push(buf);
    }
}

buf = {};

n = list.length;

for (var i = 0; i < n; i++) {
    if (list[0][1] === list[i][1] && i > 0) {
        buf['name'] = buf['first'] + ' ' + buf['second'];
        delete buf['first'];
        delete buf['second'];
        date.push(buf);
        buf = {};
    }
    buf[list[i][1]] = list[i][2];
}

buf['name'] = buf['first'] + ' ' + buf['second'];
delete buf['first'];
delete buf['second'];
date.push(buf);
buf = {};

buf['list'] = date;

console.log(buf);