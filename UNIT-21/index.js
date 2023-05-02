ul.before('Список смартфонов');
  ul.after('конец списка'); 

  let liFirst = document.createElement('li');
  liFirst.innerHTML = 'новая перспективнвя модель';
  ul.prepend(liFirst); 

  let liLast = document.createElement('li');
  liLast.innerHTML = 'новая хреновая модель';
  ul.append(liLast);


    // удаляем элементы списка по клику
  let elems = document.querySelectorAll('li');

for (let elem of elems) {
	elem.addEventListener('click', function() {
		elem.remove();
	});
}


//обрабочики движения мыщи
let buttEl = document.getElementsByTagName('button')[0]
buttEl.addEventListener('mouseover', function () {
  console.log('курсор вошел в границы кнопки!')
})

let buttElem = document.getElementsByTagName('button')[0]
buttElem.addEventListener('mouseout', function () {
  console.log('курсор вышел за границы кнопки!')
})


//вывод дата атрибута
let buttClick = document.getElementsByTagName('button')[0]
buttClick.addEventListener('onclick', function ()

{
    console.log(this.getAttibute('data-num'));
});

window.addEventListener('load', () =>{
  console.log($);
});

$('document').ready(() =>{
  let form = $('ol')[0];
  console.log(
  $(form).css('color'));

});


$(document).ready(function(){
  // Добавить элемент до списка
  $("#listAvia").before("<h2>&mdash; Список авиакомпаний &mdash;</р2>");
  
});

$(document).ready(function(){
  // Добавить элемент после контейнера 
  $("#listAvia").after("<p>&mdash; List is incomplete,there's a lot of other flag-carriers in world &mdash;</p>");
});

$(document).ready(function() {
  $("ol").prepend('<li>Iberia</li>');
  $("ol").append('<li>FinnAir</li>');
});

$( ".avia3" ).remove();