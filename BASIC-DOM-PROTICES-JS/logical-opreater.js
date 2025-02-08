
//logical opreater in javascript


//Equal to OPreater

let wether = "sunny";

if (wether === "rainy"){
    document.getElementById("result").innerHTML = "Take an umbrella";
    document.querySelector("#result").style.color = "red";
} else if (wether === "sunny"){
    document.getElementById("result").innerHTML = "Take a sunglass";
    document.querySelector("#result").style.color = "green";
    
}


// logical opreater in javascript;


let wethervalu = "eee";

if(wethervalu === "rainy"  || wethervalu === 'hot'){
    document.getElementById("result").innerHTML = "Take an umbrella";
} else if (wethervalu === "sunny"){
    document.getElementById("result").innerHTML = "Take a sunglass";
} else {
    document.getElementById("result").innerHTML = "Take a water bottle";
}