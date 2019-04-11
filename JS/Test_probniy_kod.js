var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('Cost');
console.log(total);

var username;
var message;
username = 'Настя';
message = 'я тут';

var elName = document.getElementById('name');
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textContent = message;

var subtotal = (13+1)*5;
var shipping = 0.5 *(13 +1 );
var total = subtotal + shipping;

var elsub = document.getElementById('subtotal');
elsub.textContent = subtotal;
var elTotal = document.getElementById('total');
elTotal.textContent = total;


alert ('Я Javasript');
var admin , name;
name = 'Василий';
admin = name;
alert(admin);

var eath;
var user;
var a = 2;

var x = 1 + (a *= 2);
alert (x);

var hotel = {
    name:'Тула',
    rooms: 40,
    booked: 25,
    checkAvailability: function () {
        return this.rooms - this.booked;
    }
};


function getSize(width,height,depth) {
    let area = width*height;
    let volume = width*height*depth;
    let ser = [area,volume];
    return ser;
}

let areaOne = getSize(3,2,3);
let volumeOne = getSize(3,2,1);
console.log(areaOne);
console.log(volumeOne);






