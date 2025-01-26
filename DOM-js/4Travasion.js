// Travasion is a travel a element into one place to another place


let val;

const list = document.querySelector(".collection")

const listItem = document.querySelector("li:last-child");

val = list;
val = list.children;
val = list.children[0];
val = list.children[0].textContent = `Hello`;

console.log(val);

// first child

val = list.firstElementChild;
console.log(val);

// last child

val = list.lastElementChild;
console.log(val);

// count child element

val = list.childElementCount;
console.log(val);


// get parent element

val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
console.log(val);



// get next sibling element li first-child

val = listItem;

// val = listItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

val = listItem.previousElementSibling.previousElementSibling;
console.log(val);