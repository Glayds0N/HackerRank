
//The size of the array
const n = Math.ceil(Math.random() * 1000);

//Building the array
let ar = [];
for(let i=0; i <= n; i++){
    const num = Math.floor(Math.random()*1000);
    ar.push(num)
}


// My code!
function SimpleArraySum(ar){
    let sum1 = 0;
    let sum2 = 0;

    //First Solution!
    for (let value of ar){
        sum1 += value;
    }


    //Second Solution!
    for(let i=0; i<ar.length; i++){
        sum2 += ar[i];
    }

    return sum1
}

console.log(SimpleArraySum(ar))