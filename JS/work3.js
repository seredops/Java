//№1
function getarr(someArr,somearr2) {
    if (!Array.isArray(someArr)){
        console.log("не массив");
        return;
    }
    if (!Array.isArray(somearr2)){
        console.log("не массив");
        return;
    }
    if (someArr.length !== somearr2.length){
        return;
    }
    let count = 0;
    for ( let i =0;someArr.length;i++){
        if(someArr[i] == somearr2[i]){
            count++;
        }
        else {
            return;
        }
        if (count == someArr.length){
            return true;
        }
    }
}
arr1 = [1,2,3];
arr2 = [1,2,3];
console.log(getarr(arr1,arr2));

//№2
function recurs(sered) {
    let summa=0;
    if(sered<10){
        return false;
    }
    summa+= sered%10+recurs(sered/10);
    return summa;
}

console.log(recurs(150));


//№3
range = function (a, b, step){
    if(!step) step = 1;
    var range = [];
    if(a<b){
        for (var i = a; i<=b; i+=step)
            range.push(i);
    }else{
        for (var i = a; i>=b; i+=step)
            range.push(i);
    }
    return range;
};


sum = function(range){
    let sum = 0;
    for (let i = 0; i<=range.length; i++)
        sum +=i;
    return sum;

};
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));
