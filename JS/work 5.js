let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };


    function miniGoods(obj, from, to) {
        let goway = {};
        for (let key1 in obj) {
            if (obj[key1]['price'] >= from && obj[key1]['price'] <= to) {
                goway[key1] = obj[key1];
            }
        }
        return goway;
    }

    console.log(miniGoods(goods, 2000, 3000));

goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

 function addToChart(object, title, countToChart){          //создаем функцию
        for (let key in object){      // создаем перебор с переменой которая будет в обьекте
            if (object[key]['title'] == title){ // если обьект со свойством key с наименовонием ровно название наименование в каталоге
                object[key]['count'] -= countToChart; // объект с масиввом и количиство - новая переменая
                if (object[key]['count']<0){ // если объект с количствм меньше 0 то товара нету на складе
                    console.log('нету товара');
                    return; // возвращение данных
                }else{
                    console.log('товар добавлен' + object[key]['title']);
                    console.log('осталось' + object[key]['count']);
                }
            }
        }
    }
addToChart(goods, 'Гитара', 33);

/*employees.sort(function(a, b){
var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
if (nameA < nameB) //сортируем строки по возрастанию
  return -1
if (nameA > nameB)
  return 1
return 0 // Никакой сортировки
})*/
//сделал по этому примеру 
let books = [
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}
];

books.sort((prev, next) => {
    if ( prev.title < next.title ) return -1;
    if ( prev.title < next.title ) return 1;
});

console.log(books);





