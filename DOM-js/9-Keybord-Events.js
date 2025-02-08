const taskInput = document.querySelector("#task");

// taskInput.addEventListener("keydown" , runEvent);

// taskInput.addEventListener("keyup" , runEvent);

// taskInput.addEventListener("keypress" , runEvent);


//more keybord events refer to onlie documentation


taskInput.addEventListener("focus" , runEvent);

function runEvent(e){
    console.log(e.type);
    console.log(e.target.value);
    
}