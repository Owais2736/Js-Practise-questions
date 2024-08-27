

let input = +prompt("Enter a Number which you want to findout the factorial");

let total = 1;
for (let i = 0; i < input; i++) {
    total = total * (input - i)
}
console.log("The Factorial of a given no",input , "is",total);

