function findPrimaryNo(start, end) {
    let primeNo = []

    function isPrime(num) {
        if (num < 2) return false

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false
        }
        return true
    }

    for (let i = start; i <= end; i++) {

        if (isPrime(i)) {
            primeNo.push(i)

        }

    }
    return primeNo;

}

console.log(`The prime is ${findPrimaryNo(1, 10)}`);
console.log(`The prime is ${findPrimaryNo(30, 50)}`);
