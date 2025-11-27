// ```
// Find first occurrence.
// Given an integer array arr[] and a target value x, return the first index at which x appears in the array. If x is not present, return -1.
// Purpose: Basic linear search usage.
// ```
const arrayData = [1,2,3,4,42,5,6,7,19];
// Very simplee way
// const target = 19;
// let index = -1;
// for(let i =0;i<arrayData.length;i++){
//     if(arrayData[i]== target){
//         index = i;
//         break;
//     };
// }

// console.log(index)

// function base;
// const indexFiner = (arrData)=>{
//     for(let i = 0 ; i < arrData.length ;i++){
//         if(arrData[i] == 191){
//             return i
//         }
//     }
//     return -1;
// }

// console.log(indexFiner(arrayData))

const moreShortCode=(arrData , target)=>{
    for(let i =0 ; i< arrData.length;i++){
        if(arrData[i] == target) return i;
    }
    return -1
}

console.log(moreShortCode(arrayData, 192))