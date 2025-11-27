// Count occurrences
// Given an array arr[] and value x, count how many times x appears in the array. Return the count (can be zero).
// Purpose: Practice full traversal + counting.

const arrayData = [1,2,3,4,42,5,6,7,19,42,42,44,42,42];
// let count = [];

// function countExistance(arrData , target){
//     for(let i =0 ; i < arrData.length ; i++){
//         if(arrayData[i] == target) {
//             count.push(arrayData[i])
//         }
//     }
// }
// countExistance(arrayData,42)
// console.log(count.length);


// second way;

let count=0;
function countExistance(arrData , target){
    for(let i =0; i<arrData.length;i++){
        if(arrData[i] === target) count++;  
    }
}
countExistance(arrayData, 19)

console.log('occurrence > ', count)