
let array = [1, 2, 5, 6, 7, 10, 23];

var add = 0;
var mul = 1;

function sumArray(...arr) {
    for (let i = 0; i < arr.length; i++) {
        add = add + arr[i];
        mul = mul * arr[i];
    }
    console.log("The sum of the given array is", add);
    console.log("The Multiplication of the given array is", mul);
}

sumArray(...array);

// Another method is

let Array = [1, 2, 5, 6, 7, 10, 23];

const addArray = (a, b) => {
    return a + b;
}
let result = Array.reduce(addArray);
console.log("The sum of the given array is", result);
