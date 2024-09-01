

let n = 5;

for (let i = 1; i <= n; i++) {
    let a = "*";
    let space = " ";
    console.log(space.repeat(n - i) + a.repeat(i * 2 - 1));
}
for (let i = n - 1; i >= 1; i--) {
    let a = "*";
    let space = " ";
    console.log(space.repeat(n - i) + a.repeat(i * 2 - 1));
}

