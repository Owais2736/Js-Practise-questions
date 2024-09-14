
let input = +prompt("enter your percentage here");

switch (true) {

    case input >= 80 && input <= 100:
        console.log("your grade is A+");
        break;
    case input >= 70 && input < 80:
        console.log("your grade is A");
        break;
    case input >= 60 && input < 70:
        console.log("your grade is B");
        break;
    case input >= 50 && input < 60:
        console.log("your grade is C");
        break;
    case input >= 40 && input < 50:
        console.log("your grade is D");
        break;
    case input >= 1 && input < 40:
        console.log("your are Fail");
        break;
    default:
        console.log("Your input must be between 1 to 100");

}