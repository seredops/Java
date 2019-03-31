let
    a = 10;
b =15;
c = 12;
console.log(2 * (a * b + b * c + a * c ));
res = (a >= b) ? [(a === b) ? console.log("Высота равна ширине") : console.log("Высота больше ширины")] : console.log("Высота меньше ширины");

let fazenda = 1000;
let shirina = 15;
let dlina = 25;
let octatok;
octatok = fazenda % (shirina * dlina);
console.log(octatok);


let oval = 15 * 100;
let oval2 = 600;
let koleco;
koleco = oval - oval2;
console.log("Площадь овала", oval, "СМ2");
console.log("площадь овала" , oval2, "СМ2")
console.log("Площадь полученного кольца:", koleco, "см2");

let x, y, vr;
x = 10;
y = 3;
if (x > y)
{
    vr = y;
    y = x;
    x = vr;
}
else{
    console.log('x уже меньше y или x = y');
}
console.log('x=' +x)
console.log('y=' + y)

//Задание 5
//Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n.
// Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.

let m = 8.5 ,n = 11.45;
let dif_m;
let dif_n;
dif_m = Math.abs(10 - m);
dif_n = Math.abs(10 - n);
if(dif_m < dif_n) {
    console.log('ближайшее значение к числу', 'm=' + m);
}else {
    console.log('ближайшее значение к числу', 'n=' + n)
}
