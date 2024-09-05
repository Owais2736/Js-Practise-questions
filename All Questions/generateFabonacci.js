
function generateFabanacci(n) {

    if (n <= 0) return [];
    if (n === 1) return [0];
    let fab = [0, 1];
    for (let i = 2; i < n; i++) {
        fab.push(fab[i - 1] + fab[i - 2]);
    }

    return fab;
}
console.log(generateFabanacci(8));
console.log(generateFabanacci(0));
console.log(generateFabanacci(1));

