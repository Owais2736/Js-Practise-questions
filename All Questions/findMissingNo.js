// Write a function findMissingNumber(arr, n) that takes an array of n-1 unique numbers from 1 to n (inclusive) and finds the missing number.

function findMissingNo(arr, n) {
    let totalSum = (n * (n + 1)) / 2
 
    let arraySum = arr.reduce((sum, num) => sum + num)

    return totalSum - arraySum


}


console.log(findMissingNo([1, 2, 3, 4, 5 , 6, 7, 9], 9));