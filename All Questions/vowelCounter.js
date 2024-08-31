

let string = "Owais Ali";
let counter = 0;

function vowelCounter(str) {

    for (let i = 0; i < str.length; i++) {

        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
            counter = counter + 1;

        }

    }
    console.log(`The vowel present in your string is ${counter} `);
}

vowelCounter(string);