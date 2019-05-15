let Table = document.getElementById('table');
function CreateTables(n) {
    for (let i = 0 ; i<n; i++){ // создаю перебор
        let row = Table.insertRow(i);
        row.classList.add('row');
        for (let p = 0; p<n; p++){
            let cell = row.insertCell();
            cell.classList.add('cell');
            cell.innerText = 'windows';
            //// Возвращает случайное целое число между min (включительно) и max (не включая max)
            // // Использование метода Math.round() даст вам неравномерное распределение!
            // function getRandomInt(min, max) {
            //   return Math.floor(Math.random() * (max - min)) + min;
            // }
            let random = Math.floor(Math.random() * (n-p+1)) + p;
            if(random === p) {
                cell.setAttribute('data-present','present');
            }else{
                    cell.setAttribute('data-offline','offline');
                }
            }
        }
}

let n = prompt('number');
CreateTables(n);

let ostatok = document.getElementById('ostatok');
let div = document.createElement('div');
div.classList.add('info');
ostatok.appendChild(div);
let count = 3;
div.innerText='Количество попыток:'+ count;

ostatok.addEventListener('dbclik',target);
function target(event) {
    let target = event.target;
    console.log(target(event));
}
// на этом я пока остановился