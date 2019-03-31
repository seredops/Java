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


let summa =[4,7,10];
function summa1(summa) {
    for (let i = 0; i <=summa.length; i++){

    }
    return summa;

}
console.log(summa1(summa));
