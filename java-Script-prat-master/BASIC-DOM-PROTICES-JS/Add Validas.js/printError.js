debugger
document.getElementById('joinBtn').addEventListener("click" , function(){


    let firstName = document.getElementById('FirstName').value
    let lastName = document.getElementById('LastName').value

    

    if (firstName === '' || lastName === ''){
        document.getElementById('result').innerHTML = "please fill the form"
    } else {
        document.getElementById('result').innerHTML = ` ${firstName} ${lastName} `
    }
})