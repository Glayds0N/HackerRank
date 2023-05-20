// 1 <= n <=10
const n = Math.floor(Math.random() * 10) + 1;

// 0 <= ar[i] <=10^10
const ar = [];
for (let index = 0; index < n; index++) {
    const i = Math.floor(Math.random()*(10**10) + 1);
    ar.push(i);
    
}


// My Code!
function aVeryBigSum(ar){
    let total = 0;
    for (const value of ar) {
        total += value;
    }
    return total;
}

console.log(n);
console.log(ar);
console.log(aVeryBigSum(ar));


