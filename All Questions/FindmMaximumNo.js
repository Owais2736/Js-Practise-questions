//find the maximum no
function findMaxMin(number) {
    if (number.length === 0) {
        return undefined;
    }
    let max = number[0];
    let min = number[0];
    for (let i = 0; i < number.length; i++) {

        if (number[i] > max) {
            max = number[i];
        }

        if (number[i] < min) {
            min = number[i];
        }


    }
    console.log("The maximum no of the given array is", max);
    console.log("The minimum no of the given array is", min);
}

findMaxMin([1, 2, 3, 6, 2, 10, 1, 20, 5]);




