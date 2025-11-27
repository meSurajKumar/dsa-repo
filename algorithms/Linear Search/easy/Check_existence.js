// Check existence
// Given an array arr[] and a target x, return true/false depending on whether x exists in arr.
// Purpose: Simpler version — no need for index, just presence check.

const arrayData = [1,2,3,4,42,5,6,7,19];

function chekcExists(arrData , target){
    for(let i =0 ; i< arrData.length ; i++){
        if(arrData[i]=== target) return true;
    }
    return false;
}
console.log(chekcExists(arrayData,422))