// Count occurrences
// Given an array arr[] and value x, count how many times x appears in the array. Return the count (can be zero).
// Purpose: Practice full traversal + counting.

// const arrayData = [1,2,3,4,42,5,6,7,19,42,42,44,42,42];
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

// let count=0;
// function countExistance(arrData , target){
//     for(let i =0; i<arrData.length;i++){
//         if(arrData[i] === target) count++;  
//     }
// }
// countExistance(arrayData, 19)

// console.log('occurrence > ', count)



// for of loop
// reduce
// frequency map for {For counting the multiple element occurance}
// filter

// for of loop :- To count the occurance of element.

const arrayData = [12,11,12,23,24,14,56,78,79,66,78];
let count =0
const occuranceFinder = (arrData , target)=>{
    for(item of arrayData){
        if(item === target) count++ 
    }
}

occuranceFinder(arrayData , 78);
console.log(count)

with filter.
const count = arrayData.filter((x)=> x==78).length
console.log(count)
but with the filter this is slightly slower because it's create new array.

                                                                                                                                      