

//A JavaScript event is a specific action that occurs within a web page or application, such as clicking on an element, moving the mouse, pressing a key, or loading a page. Essentially, events are like signals that tell the browser to execute certain code or perform specific actions in response to user interactions or other occurrences.


// document.querySelector(`.clear-tasks`).addEventListener(`click`,function(){
//     console.log(`Hello World`);
// })


//using named function

// document.querySelector(`.clear-tasks`).addEventListener(`click`,onClick);

// function onClick(){
//     console.log("Hello Tamil");
// }


//Event Object

let count = 0;


document.querySelector(".clear-tasks").addEventListener("click", onClick);

document.querySelector("#task-title").innerText = count;


function onClick(){

    count = count +1;
    document.querySelector("#task-title").innerText = count
    document.querySelector("body").classList.toggle("add-color");
    console.log(count);

}

