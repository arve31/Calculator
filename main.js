let display= document.getElementById("display")
let body = document.getElementById("body")
let calculator = document.getElementById("calculator")

function zero(){
    if (display.value == "0"){
        display.value = 0;
    }else{
        display.value += 0;
    }
}

function one(){
    if(display.value == "0"){
        display.value = 1;
    }else{
        display.value += 1
    }
}
function two(){
    if(display.value == "0"){
        display.value = 2;
    }else{
        display.value += 2
    }
}

function three(){
    if(display.value == "0"){
        display.value = 3;
    }else{
        display.value += 3
    }
}

function four(){
    if(display.value == "0"){
        display.value = 4;
    }else{
        display.value += 4
    }
}

function five(){
    if(display.value == "0"){
        display.value = 5;
    }else{
        display.value += 5
    }
}

function six(){
    if(display.value == "0"){
        display.value = 6;
    }else{
        display.value += 6
    }
}

function seven(){
    if(display.value == "0"){
        display.value = 7;
    }else{
        display.value += 7
    }
}

function eight(){
    if(display.value == "0"){
        display.value = 8;
    }else{
        display.value += 8
    }
}

function nine(){
    if(display.value == "0"){
        display.value = 9;
    }else{
        display.value += 9
    }
}

function plus(){
    if(display.value.toString().slice(-1) == "+"){
    }else if(display.value.toString().slice(-1) == "-" || display.value.toString().slice(-1) == "*" || display.value.toString().slice(-1) == "/" || display.value.toString().slice(-1) == "."){
        display.value = display.value.toString().slice(0, -1);
        display.value += "+"
    }else if(display.value == ""){
        display.value = ""
    }
    else{
        display.value += "+"
    }
}

function minus(){
    if(display.value.toString().slice(-1) == "-"){
    }else if(display.value.toString().slice(-1) == "+" || display.value.toString().slice(-1) == "*" || display.value.toString().slice(-1) == "/" || display.value.toString().slice(-1) == "."){
        display.value = display.value.toString().slice(0, -1);
        display.value += "-";
    }
    else{
        display.value += "-"
    }
}

function multiply(){
    if(display.value.toString().slice(-1) == "*"){
    }else if(display.value.toString().slice(-1) == "+" || display.value.toString().slice(-1) == "-" || display.value.toString().slice(-1) == "/" || display.value.toString().slice(-1) == "."){
        display.value = display.value.toString().slice(0, -1);
        display.value += "*";
    }else if(display.value == ""){
        display.value = ""
    }
    else{
        display.value += "*"
    }
}

function divide(){
    if(display.value.toString().slice(-1) == "/"){
    }else if(display.value.toString().slice(-1) == "+" || display.value.toString().slice(-1) == "-" || display.value.toString().slice(-1) == "*" || display.value.toString().slice(-1) == "."){
        display.value = display.value.toString().slice(0, -1);
        display.value += "/";
    }else if(display.value == ""){
        display.value = ""
    }
    else{
        display.value += "/"
    }
}

function dot(){
    if(display.value.toString().slice(-1) == "."){
    }else if(display.value.toString().slice(-1) == "."){
        display.value = display.value.toString().slice(0, -1);
        display.value += ".";
    }
    else{
        display.value += "."
    }
}

function equation(){
    display.value = eval(display.value);
    if (display.value == "NaN" || display.value == "Infinity"){
        display.value = "";
        display.value += "Are you stupid?"
    }
}

function remove(){
    display.value = 0
}

function correct(){
    display.value = display.value.toString().slice(0, -1)
}

function mode(){
    body.classList.toggle("body-light");
    calculator.classList.toggle("calculator-light");
}