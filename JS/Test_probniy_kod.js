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
