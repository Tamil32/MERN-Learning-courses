debugger
const clearBtn =document.querySelector(".clear-tasks");

clearBtn.addEventListener('click', runEvent);{

    function runEvent(event){
        console.log(event.type);
    }
}