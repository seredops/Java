//1
let numbers = [1,5,4,2,3,8,6,9,0];
let flag = true;
for(let i=2; i<=numbers.length; i++)
{
    if(flag == false) break;

    for(let k=0; k<=numbers.length; k++)
    {
        if(numbers[i] + numbers[k] == 7)
        {
            flag = false;
            console.log(`Число M = ${numbers[i]}`);
            console.log(`Число N = ${numbers[k]}`);
            break;
        }
    }
}
//2
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('ThreeFive');
    } else if (i % 3 === 0) {
        console.log('Three');
    } else if (i % 5 === 0) {
        console.log('Five');
    } else {
        console.log(i);
    }
}
//3
let a =5, b = 10 , c =7;
if (a>b+c && b>a+c && c>a+b) {
    console.log("остроугльник");
} else if (a*a===b*b+c*c && b*b===a*a+c*c && c*c===a*a+b*b){
    console.log("прямоугольник");
} else if (a*a>b*b+c*c && b*b>a*a+c*c && c*c>a*a+b*b){
    console.log("тупоугольник")
} else {
    console.log("Yes")
}
//4.1
arr = [1,2,3];
a = arr.reverse();
for(var i=0; i<a.length; i++) {
    alert(a[i])
}
//4.2
for (let i = 1; i <= 20; i++) {
    console.log((1 << i) + " ");
}
//4.3
for (i = 0; i < 10; i++) {

    for (j = 10, k = 0; j > 0 && k < 10; j--, k++) {

        if (k < i || i >= j) {
            document.write(' ');
        }

        else {
            document.write('*');
        }
    }
    document.write('</br>');
}

let fairy = 10;
let plate = 20;
let count=0;

for(i=1;i<=plate;i++){
    if(fairy>0){
        fairy-=0.5;
        console.log('Помыли тарелок: ',i);
        console.log('Осталось моющего средства: ',fairy);
    }
    else{
        count++;
    }
}
console.log('Моющего средства осталось:',fairy);
console.log('Грязных тарелок осталось:', count);

// let x,y;
// for ( let i =0; i < 24;i++){
//     x = i/10;
//     y = i%10;
//     if( y >5 ) {
//         continue;
//     }
//     (10*x + y) (10 *y +x)
//     console.log(b);
//     b.setlenght(0);
// }
// Пример №1 который не додумал
let S =0;
 for(let h = 0;h<=24;h++){
    for(let m = 0;m<=59;m++){
        if(h/10%10==m%10&h%10==m/10%10){
            S++;
        }
    }
}
console.log(S);

// Пример 2 который тоде вроде не доделал((()))
let count1= 0;
for( let a=0;a<2; ++a){
    for (let b=0; b<6; ++b){
        if ((a*10+b)<24) {
            if ((b * 10 + a) < 60) {
                count1++
            }
        }
    }
}
console.log(count1);





