function subset(array , outputArray , tempArray = [] , index = 0){
if(index >= array.length){
    // rest logic
    outputArray.push([...tempArray]);
    console.log(`index : ${index} ,tempArray : ${tempArray}, outputarray :  ${outputArray}`)
    return;
}

// 2 conditions 
// 1-indclude
    tempArray.push(array[index]);
    subset(array , outputArray , tempArray , index + 1);
    tempArray.pop();

// 2-not-indclude
    subset(array , outputArray , tempArray , index + 2);



};


const outputArray = [];
subset([1,2,3],outputArray);
console.log(outputArray)