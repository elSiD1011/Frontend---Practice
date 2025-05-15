// 1. window.alert
var message = "Your are great!!!"
window.alert(message);

// 2. window.prompt
var myName = window.prompt("Please enter your name");
console.log(myName);
document.getElementById("username").innerHTML = `My name is ${myName}`;

// 3. window.confirm
var isEmployee = window.confirm("Are you a Employee?");
var MyEmployeer = window.prompt("Please enter your Employeer name");
if (isEmployee) {
    console.log("Yes, I am a Employee");
    document.getElementById("employeer").innerHTML = `My Employeer name is ${MyEmployeer}`;
} else {
    console.log("No, I am not a Employee");
    document.getElementById("employeer").innerHTML = `I am not a Employee`;
}