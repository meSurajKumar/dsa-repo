// 1. Hosting
// 2. Closures & Lexical Scope 


// 
// console.log(a)
// var a = 5;
// console.log(5);

// sayName();

// function sayName(){
//     console.log('raj')
// }

// const sayName = ()=>{
//     console.log('kapuur')
// }

//


// Closures & Lexical Scope

// function outer(){
//     let count = 0;

//     return function inner(){
//         count++;
//         return count;
//     }
// };
// const counter = outer();
// console.log(counter())

// for(var i = 0; i<3 ; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

 function increment(){
     let value = 1;
     return ()=>{
         value = value +1
         return value;
     }

 }

 const answer = increment()
 console.log(answer());

for(var i = 0; i < 3 ;i++){
    function valuePreserve(){
        let value = i;
        return ()=>{
            setTimeout(()=>{
                console.log(`value ${value}`)
                // return value
            },1000)
        }
    }
    const answer = valuePreserve()
    answer()
}
