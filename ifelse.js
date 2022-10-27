
function isOdd(){
    let outputElement = document.getElementById("output");
    let inputElement = document.getElementById("input");
    let num = inputElement.value;

    let convertedNum = Number(num);

    if(convertedNum % 2 === 1){
        outputElement.innerText = "yes";
    } 
    else {
        outputElement.innerText ="No"
    }

    }