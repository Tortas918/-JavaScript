let counter = 0;

function Logtext(){
    counter = counter + 1
    let str = "Time to learn how to mess with JavaScript" + counter;

    let paragraphElement = document.getElementById("paragraph1");

    paragraphElement.innerText = str;

    console.log("paragraph id is: " + paragraphElement.id);
}
