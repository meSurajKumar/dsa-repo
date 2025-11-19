// // Promises.


// const data = [1,2,4,5,6]
// const myPromise = new Promise((resolve , reject)=>{
//     if(data.includes(5)){
//         resolve('Your Promise 1 is resolve')
//     }else{
//         reject('Your Promise 1 is not resolve')
//     }
// })

// const promise2 = new Promise((resolve , reject)=>{
//     if(data.includes(6)){
//         resolve('Your Promise2 is resolve')
//     }else{
//         reject('Your Promise 2 is not resolve')
//     }
// })


// myPromise.then((resolve)=>{
//     console.log(resolve)
//     promise2.then((resolve)=>{
//         console.log(resolve)
//     })
// }).catch((err)=>{
//     console.log(err)
// })



// console.log("1");
// setTimeout(()=>console.log("2"),2000);
// Promise.resolve().then(()=>{
//     console.log("3");
//     setTimeout(()=>console.log("4"),1000);
// });

// console.log("5")


let primeData = [];
let notprimeData = [];


function isPrime(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) { // Loop from 1 to n
        if (n % i === 0) {
            count++; // Count the number of divisors
        }
    }
    console.log('count : ',count)

    return count === 2; // Prime numbers have exactly 2 divisors (1 and itself)
}


for (let i = 0; i < 4; i++) {
    if (isPrime(i)) {
        primeData.push(i);
    } else {
        notprimeData.push(i);
    }
}

console.log(`Prime numbers are: ${primeData}`);
console.log(`Not Prime numbers are: ${notprimeData}`);
