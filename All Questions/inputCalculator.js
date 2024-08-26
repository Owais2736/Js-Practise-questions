let num1 = +prompt("Enter 1st Number");
let num2 = +prompt("Enter 2nd Number");
let operator = prompt("Enter Any Operator");

if(operator === "+"){
    let result = num1 + num2;
    console.log("The sum of your given Number is" , result);
    
}
else if(operator === "-"){
    let result = num1 - num2;
    console.log("The subtraction of your given Number is" , result);
}
else if(operator === "*"){
    let result = num1 * num2;
    console.log("The Multipiliction of your given Number is" , result);
}
else if(operator === "/"){
    let result = num1 / num2;
    console.log("The Divison of your given Number is" , result);
}
else if(operator === "%"){
    let result = num1 % num2;
    console.log("The percentage of your given Number is" , result);
}
else{
    console.log("Wrong Input Please Try Again");
    
}