
//Remove elements using remove() method


const list = document.querySelector("li");
list.remove();  // its use to remove the singke element



//removeall() method


const lists = document.querySelectorAll("li");
lists.forEach(function(element){
    element.remove();  // its use to remove the all elements
})

