

//user can create their tasks

//user can delete their tasks

//user can able search to tasks

//user can update as completed and update



let tasks =[]    
 document.getElementById(`result`).innerHTML = ''


document.getElementById('addBtn').addEventListener('click', function(){
    let value = document.getElementById('taskInput').value
    tasks.push(value)


    document.getElementById(`result`).innerHTML = ''

    tasks.forEach( (item , index) => {
        document.getElementById('result').innerHTML += `<div>
                                                        <h1>${item}</h1> 
                                                         <button onclick ="deleteTask(${index})">Delete</button>
                                                         </div>`
    })
})



//function for using to delete the contants


function deleteTask(index){
    tasks.splice(index , 1)


    result.innerHTML = ''
    tasks.forEach((item , index) =>{
        result.innerHTML += `<div>
                                 <h1>${item}</h1> 
                                <button onclick ="deleteTask(${index})">Delete</button>
                                 </div>`
    })
}