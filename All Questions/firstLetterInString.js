
function Capital(str) {

    let result = str.split(' ').map(words =>
        words.charAt(0).toUpperCase() + words.slice(1)).join(" ")

    return result;

}

console.log(Capital("owais ali "));
console.log(Capital("akbar Ali"));









