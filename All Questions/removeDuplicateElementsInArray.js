
let UnigueElementArray = [];

function removeDuplicate(array) {

    for (let i = 0; i < array.length; i++) {
        if (!UnigueElementArray.includes(array[i])) {
            UnigueElementArray.push(array[i])
        }
    }
    return UnigueElementArray;
}

let result = removeDuplicate([1, 2, 2, 4, 5, 4, 5, 4, 7, "owais", "owais", true, true, false]);
console.log(result);
