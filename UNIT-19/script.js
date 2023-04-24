let a1 = 10;
let a2 = a1+10;
if (a1==a2){
    console.log (Math.SQRT(a1))
}
else {
console.log (a1 + a2)
};
let index = 0;

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(index+=1, 'array:', digits);

digits.push(11);
console.log(index+=1, 'array:', digits);

digits.pop();
console.log(index+=1, 'array:', digits);

digits.unshift(0);
console.log(index+=1, 'array:', digits);

digits.shift();
console.log(index+=1, 'array:', digits);

const digitsPlusOne = digits.map(n => n + 1)
console.log(index+=1, 'array:', digitsPlusOne);

let concat = digits.concat(digitsPlusOne);
console.log(index+=1, 'array:', concat);

concat = concat.map(el => el **2);
console.log(index+=1, 'array:', concat);

concat.reverse();
console.log(index+=1, 'array:', concat);



