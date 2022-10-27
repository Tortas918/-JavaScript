let numArray = [];

function AddToArray(){
    let num = document.getElementById("input").value;
num = Number(num);
numArray.push(num);

let sum = 0;
numArray.forEach(function(numItem,index){
sum = sum + numItem;

})

let pEl = document.getElementById("output");
pEl.innerText = numArray;

let pEl2 = document.getElementById("Sum");
pEl2.innerText = sum;

}