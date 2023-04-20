var a = 25, b = 20;
  if (a > b) console.log("значение a больше, чем b" ); 

  if (!(a == b)) {
    console.log( "значение a не равно b" );    
    console.log( "значение a будет равно b" );
    b = 25;
  }


var date = new Date();
var time = date.getHours();

if (time < 13) {
  console.log( "Good morning!" );
} else {
  console.log( "Good afternoon!" );
}

let price = 100
let userCity = 'Moscow'
if (userCity === 'Moscow') {
  price = price**3
} else if (userCity === 'SPB') {
  price = price**15
} else if (userCity === 'zamkad') {
  price = price / 2
}

console.log(price);


let digit = 100;
let table = [digit, digit+1, digit+2, digit+3];

for (let number of table) {
    console.log(number);
}

for (let backWard = table.length - 1; backWard >= 0; backWard -= 1) {
    console.log(table[backWard]);
  }

  let phone = {
    vendor: 'Apple',
    model: 'iPhone 11 Pro Max',
    color: 'midnight green'
  };
  for (let Store in phone) {
   
    console.log(Store + ' = ' + phone[Store]);
  }