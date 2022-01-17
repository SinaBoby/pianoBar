//Examine the document Object

////console.dir(document)
//console.log(document.domain)
//console.log(document.URL)
//console.log(document.title);
////document.title = 123;
////console.log(document.title)
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[12]);
//console.log(document.all[61]);
//document.all[63].textContent = "The prize";
//document.all[60].textContent= "first Item";
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);
//const menu = document.getElementsByClassName('nav-down');
//console.log(menu);

//Selectors
//* getElementById
//console.log(document.getElementById('webshop'));
//console.log(document.getElementById('main'));
let webshop = document.getElementById('webshop');
//console.log(document.getElementById('webshop'))
webshop.innerText = 'Gallery';

//webshop.innerText = "Shop";
//difference between <innerText & textContent> is that one of them focus to styling

//console.log(webshop.textContent);  //if we add inline style, text content doest pay attention to it & ignore it.
//console.log(webshop.innerText);   //it pay attention to the style(span display:none => not showing in console).

//webshop.innerHTML = "<h1>Hello</h1>";  //==>  add inner html tag to <h> hello! as child but text also changes
//webshop.style.border = "1px solid black";
//webshop.style.padding = "10px";
//const cardTitle = document.getElementById('card-title');
//console.log(cardTitle)
//cardTitle.innerHTML = "<h3>1px solid black</h3>";

//const header = document.getElementById('header');
//header.style.borderBottom = "Solid 3px black";
//header.style.paddingBottom = "5px";

//GetElemetsByClassName

let items = document.getElementsByClassName('list-item');
//console.log(items[1]
//items[1].innerText = 'hello2'
//items[1].style.fontWeight= "bold";
//
//
//for ( let i = 0; i < items.length;i++){
//  items[i].style.backgroundColor = "lightgrey";
//  items[i].children[0].style.borderRadius = "10px";
//  items[i].children[0].style.backdropFilter = "blur(10px)";
//}
//
////Get elements By Tag name

//let li = document.getElementsByTagName('li');
//
//for(let i = 0 ;i<li.length;i++){
//  li[i].style.letterSpacing = "2px";
//
//}

// QUERY SELECTOR //

//It only grabs the first matched item
//if wanna select all o the u should use query selector all

//let header = document.querySelector('#header');
//header.style.borderBottom = "1px solid black";
//const input = document.querySelector('input[type="text"]');
//input.placeholder = "hello world";
//input.style.padding = "0 10px"
//let submit = document.querySelector('input[type = "submit"]')
//submit.value = "Send";
//const toggle = document.querySelectorAll('.list-item');
//console.log(toggle)
//toggle[1].style.color = "red";
//toggle[3].style.color = "green";
//toggle[2].textContent = "correct";
const odd = document.querySelectorAll('.list-item:nth-child(even)');
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = 'grey';
}
//
const body = document.querySelector('.card-container');
//console.log(body)
const newItem = document.createElement('li');
newItem.classList.add('list-item');
newItem.innerText = 'This is correct Answer';
//newItem.style.color = "green";
//
//console.log(odd[1]);
//console.log(body);

const itemList = document.querySelector('.items');
//console.log(itemList);
const correct = itemList.children[1];
//console.log(correct)
itemList.appendChild(newItem);
const answer = document.querySelector('input[type="text"]');
//console.log(answer);

//Parrent Node property

//console.log(itemList.parentElement.parentNode);
//console.log(itemList.parentNode);
itemList.parentElement.parentElement.style.backgroundColor = '#f4f4f4';

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild

//console.log(itemList.firstChild);
//console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';
//itemList.lastElementChild.innerText = 'Bye';
//itemList.lastElementChild.textContent = 'item 4';
//itemList.lastElementChild.style.backgroundColor = 'Grey';

//Next Sibling
//
//console.log(itemList.nextSibling);
//console.log(itemList.nextElementSibling);
//
//Previous sibling
//console.log(itemList.previousSibling);
//console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'darkGreen';

//Create Element

const newDiv = document.createElement('div');

//Add class
newDiv.className = 'Hello';
//Add ID
newDiv.id = 'Hello1';

//Add Atr

newDiv.setAttribute('title', 'hello div');

//Create A text Node

var newDivText = document.createTextNode('Hello world');

//Add text to div

newDiv.appendChild(newDivText);
const leftNav = document.querySelector('header .left-nav');
//console.log(leftNav);
const searchBar = document.getElementById('search');
//console.log(searchBar);
//leftNav.insertBefore(newDiv, searchBar);
newDiv.style.fontSize = '18px';

//console.log(newDiv);

// EventListeners
//const about = itemList
console.log(document.querySelector('.nav-down').children[0].children[0]);
const about = document.querySelector('.nav-down').children[0].children[0];

about.addEventListener('click', toggleMenu);
function toggleMenu() {
  const aboutList = document.querySelector('.nav-down').children[0].children[1];
  //console.log(aboutList);
  if (aboutList.style.display !== 'none') {
    aboutList.style.display = 'none';
  } else {
    aboutList.style.display = 'inline-block';
  }
}
const button = document.getElementById('submit');
//button.addEventListener('click', buttonClick);
//button.addEventListener('click', colorChange);

function buttonClick() {
  if (searchBar.style.display !== 'none') {
    searchBar.style.display = 'none';
  } else {
    searchBar.style.display = 'inline-block';
  }
}

function colorChange() {
  const correctAnswer = itemList.children[1];
  if (correctAnswer.style.backgroundColor !== 'green') {
    correctAnswer.style.backgroundColor = 'green';
    correctAnswer.textContent = 'correct';
  } else {
    correctAnswer.style.backgroundColor = 'red';
  }
}
//const btn = document.getElementById('btn');
//console.log(btn);
//btn.addEventListener('click',btnClick)
//
//function btnClick(e){
//  console.log(e.target);
// //console.log(e.target.id);
// //console.log(e.target.className);  //String of class names
// console.log(e.target.classList);  //Dom tOKENS LIST
// const output = document.getElementById('output');
// output.innerHTML =  '<h3>' + e.target.id + '<h3>';
// console.log(e.type) //Time of Event
// //console.log(e.clientX); //position from window
// //console.log(e.clientY);
// console.log(e.offsetX);  //position from target(element)
// console.log(e.offsetY);
// console.log(e.altKey);  //show if u hold altKey during click
// console.log(e.shiftKey)  //u can write an if statement based on these keys value
// //document.getElementsByClassName('title')[0].style.backgroundColor = ' red';
// //document.querySelector('.title').textContent = "changed";

//}

//Mouse events : click, dblclick, mousedown, mouseup, mouseout, mouseenter,
const btn = document.getElementById('btn');
const box = document.getElementById('box');
console.log(box);
//box.addEventListener('mouseenter',runEvent);  //enter the element itself
//box.addEventListener('mouseleave',runEvent);
//box.addEventListener('mouseover',runEvent);  //enter any inner element
//box.addEventListener('mouseout',runEvent);
//box.addEventListener('mousemove', runEvent);
const output = document.getElementById('output');
console.log(output);

//btn.addEventListener('mouseup',runEvent);
const itemInput = document.querySelector('input[type="text"]');
//console.log(itemInput);
const form = document.querySelector('form');
//console.log(form)

//itemInput.addEventListener('cut',runEvent);
//itemInput.addEventListener('paste',runEvent);
//itemInput.addEventListener('focus',runEvent);  //when u click inside(focus)
//itemInput.addEventListener('blur',runEvent);   //when u click outside
itemInput.addEventListener('keydown',runEvent);   //anyThing u do with input

//Key Events:Keydown, keyUp, keypress
function runEvent(e) {
  e.preventDefault()
  console.log(e)
  console.log('EVENT TYPE:' + e.type);
  console.log('EVENT TYPE:' + e.target);

  console.log('EVENT TYPE:' + e.target.value);
  //console.log(e.target.value);
  //output.insertAdjacentHTML("beforeend",`<h3>${e.target.value}</h3>`) ;
  //output.innerHTML =
  //  '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '<h3>';
   // document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;//connecting offset values to backgroundColor and set rgb values

}

const select = document.querySelector('select');
select.addEventListener('change', runEvent);
select.addEventListener('input',runEvent);
form.addEventListener('submit',runEvent)
class Menu {
  handleEvent(event) {
    // mousedown -> onMousedown
    let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
    this[method](event);
  }

  onMousedown() {
    elem.innerHTML = "Mouse button pressed";
  }

  onMouseup() {
    elem.innerHTML += "...and released.";
  }
}

let menu = new Menu();
const elem= document.getElementById('elem')
elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);
elem.onclick = () => select.remove();