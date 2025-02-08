function addition(){
    let x = document.getElementById("first-number").value;
    let y = document.getElementById("second-number").value;
    let z = Number(x)+Number(y);
    let output = document.getElementById("output");
    output.innerHTML = String(z);
    if(z < 0) {
        output.classList.add("negative");
    }
    else{
        output.classList.remove("negative");
    }
}
function subtraction(){
    let x = document.getElementById("first-number").value;
    let y = document.getElementById("second-number").value;
    let z = Number(x)-Number(y);
    let output = document.getElementById("output");
    output.innerHTML = String(z);
    if(z < 0) {
        output.classList.add("negative");
    }
    else{
        output.classList.remove("negative");
    }
}
function multiplication(){
    let x = document.getElementById("first-number").value;
    let y = document.getElementById("second-number").value;
    let z = Number(x)*Number(y);
    let output = document.getElementById("output");
    output.innerHTML = String(z);
    if(z < 0) {
        output.classList.add("negative");
    }
    else{
        output.classList.remove("negative");
    }
}
function division(){
    let x = document.getElementById("first-number").value;
    let y = document.getElementById("second-number").value;
    let z = Number(x)/Number(y);
    let output = document.getElementById("output");
    output.innerHTML = String(z);
    if(z < 0) {
        output.classList.add("negative");
    }
    else{
        output.classList.remove("negative");
    }
}
function power(){
    let x = document.getElementById("first-number").value;
    x = Number(x);
    let y = document.getElementById("second-number").value;
    y = Number(y);
    let z = 1;
    for(let i=0; i<y; i=i+1){
        z=x*z;
    }
    let output = document.getElementById("output");
    output.innerHTML = String(z);
    if(z < 0) {
        output.classList.add("negative");
    }
    else{
        output.classList.remove("negative");
    }
}
function cleared(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}