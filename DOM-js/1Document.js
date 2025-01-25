let val;

val = document;
val = document.all;
val = document.body;
val = document.head;
val = document.URL;
val = document.domain;

console.log(val);


let Tasktitle = document.getElementById('task-title');
console.log(Tasktitle);

// change style

Tasktitle.style.backgroundColor = `yellow`;
Tasktitle.style.color = `orange`;
Tasktitle.style.padding = `20px`;

// change content

Tasktitle.innerText = `Hello Tamil`;
Tasktitle.innerHTML = `<span> Hello Tamil </span>`;

console.log(document.querySelector(`#task-title`));
console.log(document.querySelector(`li`));

