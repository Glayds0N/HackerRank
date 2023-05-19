//The size of the array
const n = Math.floor(Math.random() * 100) + 1;

//Building the array
let alice = [];
let bob = [];
for(let i=0; i <= n; i++){
    const numAlice = Math.floor(Math.random()*100) + 1;
    alice.push(numAlice);
    const numBob = Math.floor(Math.random()*100) + 1;
    bob.push(numBob);
}

//My Code!
function compareTheTriplets(alice, bob){
    let aliceScore = 0;
    let bobScore = 0;
    for(let index=0; index<n; index++){
        if(alice[index]>bob[index]){
            aliceScore += 1;
        }else if(alice[index]<bob[index]){
            bobScore += 1;
        }
    }
    return `Alice score: ${aliceScore} and Bob score is ${bobScore}`
}

console.log(compareTheTriplets(alice, bob))