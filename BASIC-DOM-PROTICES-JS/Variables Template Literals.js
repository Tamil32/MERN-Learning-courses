
debugger
document.getElementById("joinBtn").addEventListener("click", function(){

    let FirstName = document.getElementById('FirstName').value
    let LastName = document.getElementById('LastName').value
    
    document.getElementById("result").innerHTML = `${FirstName} ${LastName}`
})