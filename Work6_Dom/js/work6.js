(function () {
    'use strict';


    let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25,
            img: 'pianino.jpg'
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40,
            img: 'guitar.jpg'
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12,
            img: 'baraban.png'
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50,
            img: 'fleita.jpg'
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5,
            img: 'arfa.jpg'
        }
    };
    for (let key in goods){
        let divgoods = document.getElementById('goods');
        let div = document.createElement('div');
        div.setAttribute('class','conteiner');

        let name = document.createElement('h2');

        let textName = document.createTextNode(goods[key]['title']);
        //console.log(textName);
        name.appendChild(textName);
        //console.log(name);
        let img = document.createElement('img');
        img.setAttribute ('class','img');
        img.setAttribute ('src', 'img/'+goods[key]['img']);
        //console.log(img);
        let price = document.createElement('p');
        let priceText = document.createTextNode(goods[key]['price']);
        price.appendChild(priceText);
        //console.log(price);

        divgoods.appendChild(div);
        div.appendChild(name);
        div.appendChild(img);
        div.appendChild(price);


    }
}());

// zadanie 2

let articles = [
    {
        id: 1,
        title: "JS",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 2,
        title: "PHP",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 3,
        title: "HTML",
        description: "Описание",
        author: "Alex"
    },
    {
        id: 4,
        title: "Базы Данных",
        description: "Описание",
        author: "Peter"
    }
];
/*

let allTables = document.getElementById('table');
let table = allTables[0];


let caption = table.createCaption();
caption.innerText = 'caption';

let row = table.insertRow(0);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);

cell1.innerText = 'cell1';
cell2.innerText = 'cell2';*/


let table = document.createElement('table');
table.setAttribute('class','table');
//console.log(table);
table.insertRow();
for (key in articles[0]) {
    let header = document.createElement('th');
    // console.log(header);
    let text = document.createTextNode(key);
    console.log(text);
    header.appendChild(text);//присвоить к загаловку таблицы
    // console.log(header);
    // table.appendChild(header); так элементы оказались внизу а так.
    table.firstChild.appendChild(header);
    // так вверху почему? как оно может влият на перемещение сверху в вниз.?
    // Свойство firstChild возвращает первый дочерний узел указанного узла в виде объекта Node.
    // Свойства firstChild и lastChild обеспечивают быстрый доступ к первому и последнему элементу
    // console.log(header);
}
// console.log(table);
    for (key in articles){
        let row = table.insertRow();
        let id = row.insertCell();
        let title = row.insertCell();
        let text = row.insertCell();
        let author = row.insertCell();
        // document.getElementById('table').appendChild(table);


        id.innerHTML = articles[key]['id'];
        //console.log(id);
        title.innerHTML = articles[key]['title'];
        text.innerHTML = articles[key]['description'];
        author.innerHTML = articles[key]['author'];     //console.log(author);
        document.getElementById('table').appendChild(table);

}





