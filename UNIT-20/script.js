let caption = (document.getElementById('title').innerHTML); //получение заголовка по id
console.log(caption);
let parag = (document.getElementsByClassName('txt')); //получение всех параграфов по классу
console.log(parag); 
let paragraph = (document.getElementsByTagName('p')); //получение всех параграфов по тэгу
console.log(paragraph);
let allPArray = Array.from(paragraph);
console.log(allPArray); //вывод массива в консоль

for (let i = 0; i <= allPArray.length - 1; i++) {
	console.log(allPArray[i]); //вывод массива в консоль циклом
}

console.log(Array.isArray(allPArray)); //проверяем массив

let middle = allPArray.slice(1, -1); //вычленяем средние элементы
console.log(middle);

let el = document.getElementById('child1');
let par1 = el.closest("#parent1");
console.log(par1);

let colour = 'red';

let headElement = document.querySelector('#caption'); // обращение к интересующему свойству и присвоение нового цвета
headElement.style.color = colour;

let itemElement = document.querySelectorAll('.item'); //обращение к цвету рамки всех элементов
itemElement.style.borderColor = "black";

let itemClass = document.querySelector('li'); //меняем класс у элементов списка - перестает работать окрашивание рамок в черный цвет
itemClass.classList.add('child');

let listItems = document.getElementById("list");
function removeItem() {
    var last = listItems[listItems.length - 1];
    
}
