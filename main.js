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
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);
const menu = document.getElementsByClassName('down');
console.log(menu);



//Selectors
//* getElementById
console.log(document.getElementById('main'));
console.log(document.getElementById('webshop'));
let webshop = document.getElementById('webshop');
//console.log(document.getElementById('webshop'))
//webshop.textContent = "Gallery";

//webshop.innerText = "Shop";
//difference between <innerText & textContent> is that one of them focus to styling

//console.log(webshop.textContent);  //if we add inline style, text content doest pay attention to it & ignore it.
//console.log(webshop.innerText);   //it pay attention to the style(span display:none => not showing in console).

//webshop.innerHTML = "<h1>Hello</h1>";  //==>  add inner html tag to <h> hello! as child but text also changes
//webshop.style.border = "1px solid black";
//webshop.style.padding = "10px";
const cardTitle = document.getElementById('card-title');
//console.log(cardTitle)
//cardTitle.innerHTML = "<h3>1px solid black</h3>";

//const header = document.getElementById('header');
//header.style.borderBottom = "Solid 3px black";
//header.style.paddingBottom = "5px";

//GetElemetsByClassName 

let items = document.getElementsByClassName('list-item');
console.log(items[1])
//items[1].textContent = 'hello2'
items[1].style.fontWeight= "bold";


for ( let i = 0; i < items.length;i++){
  items[i].style.backgroundColor = "lightgrey";
  //items[i].children[0].style.borderRadius = "10px";
  //items[i].children[0].style.backdropFilter = "blur(10px)";
}

//Get elements By Tag name


let li = document.getElementsByTagName('li');

for(let i = 0 ;i<li.length;i++){
  li[i].style.letterSpacing = "2px";

}


// QUERY SELECTOR //

//It only grabs the first matched item 
//if wanna select all o the u should use query selector all

let header = document.querySelector('#header');
header.style.borderBottom = "1px solid black";
const input = document.querySelector('input[type="text"]');
input.placeholder = "hello world";
input.style.padding = "0 10px"
let submit = document.querySelector('input[type = "submit"]')
submit.value = "Send";
const toggle = document.querySelectorAll('.list-item');
console.log(toggle)
toggle[1].style.color = "red";
toggle[3].style.color = "green";
toggle[2].textContent = "correct";
const odd = document.querySelectorAll(".list-item:nth-child(odd)");
for( let i = 0; i< odd.length; i++){
  odd[i].style.backgroundColor = "grey";
}











