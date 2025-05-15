# JavaScript Window Methods

This lesson covers three important window dialog methods in JavaScript:
- window.alert()
- window.prompt() 
- window.confirm()

## 1. window.alert()
The `window.alert()` method displays an alert box with a message and an OK button.

**Example:**
```javascript
var message = "Your are great!!!"
window.alert(message);
```

## 2. window.prompt() 
The `window.prompt()` method displays a dialog box that prompts the user for input. It returns the input value or null if the user cancels.

**Example:**
```javascript
var myName = window.prompt("Please enter your name");
console.log(myName);
document.getElementById("username").innerHTML = `My name is ${myName}`;
```

## 3. window.confirm()
The `window.confirm()` method displays a dialog box with a message and OK/Cancel buttons. It returns `true` if OK is clicked and `false` if Cancel is clicked.

**Example:**
```javascript
var isEmployee = window.confirm("Are you a Employee?");
var MyEmployeer = window.prompt("Please enter your Employeer name");
if (isEmployee) {
    console.log("Yes, I am a Employee");
    document.getElementById("employeer").innerHTML = `My Employeer name is ${MyEmployeer}`;
} else {
    console.log("No, I am not a Employee");
    document.getElementById("employeer").innerHTML = `I am not a Employee`;
}
```

### Key Points:
- `alert()` is used to show a message
- `prompt()` is used to get user input
- `confirm()` is used for yes/no decisions
- All these methods pause script execution until user interaction