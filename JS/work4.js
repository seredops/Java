
//1

let replacement = prompt('Введите текст');
let str12 = "Текст для замены";
let String = function(search, replacement) {
    return search.replace(/Текст для замены/g, replacement);
};
console.log(String(str12, replacement));
//2

function getNumberArrFromStr(str) {
    if(! str) return [];
    return str.match(/(\d+)/g);
}

str = 'дом 48, корпус 9, парадная 7, этаж 4';
console.log(getNumberArrFromStr(str));

//3

function getSortCityStr(str) {
    if(! str) return '';
    return str.match(/([\w|А-я-]+)/g).sort().toString().replace(/,/g, " ");
}

console.log(getSortCityStr('Спб Москва Курск Орел Нижний Новгород Новый-Уренгой Архангельск'));