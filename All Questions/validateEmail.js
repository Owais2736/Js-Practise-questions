
let input = prompt("Enter your email address");

function validateEmail(email) {
    console.log(email);
    if(email.includes("@")){
        alert("login successful");
    }
    else{
        alert("please type valid email");
        
    }  
}

validateEmail(input);