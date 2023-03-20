//I ask the user for two numbers
let firstNumber = confirm('Enter the first number');
let secondNumber = prompt('Enter the second number');

//Convert the entered data into numbers
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);


//Perform mathematical operations and store the results in a variable
let sum = firstNumber + secondNumber;
let takingAway = firstNumber - secondNumber;
let plural = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

//Display the results using an alert
alert(`${firstNumber}+${secondNumber}=${sum}`);
alert(`${firstNumber}-${secondNumber}=${takingAway}`);
alert(`${firstNumber}*${secondNumber}=${plural}`);
alert(`${firstNumber}/${secondNumber}=${division}`);

