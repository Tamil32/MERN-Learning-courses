// Crating a new elements

/* <li class="collection-item">
List Item 5
<a href="#" class="delete-item secondary-content">   Reference for creating a new element
  <i class="fa fa-remove"></i>
</a>
</li> */


// create a new li element

const li = document.createElement('li');
li.className ="collection-item";
li.id ="item-6";
li.innerText = "TAMIL-6";

// create a new link element

const link = document.createElement('a');
link.className = "delete-item secondary-content";
link.href = "#";
link.innerHTML = `<i class="fa fa-remove"></i>`;

// append link into li

li.appendChild(link);


// append li into ul

document.querySelector('ul.collection').appendChild(li);


 
