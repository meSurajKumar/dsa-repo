// const data = [2,3,9,4,5,6];
// const store = [];

// for(let i = 0 ; i < data.length ; i++){
//     if(store.length ===0 || data[i] > store[store.length - 1]){
//         console.log('here 1st one')
//         store.push(data[i])
//     }else{
//         console.log('here 2nd one')
//     }
// }

// console.log('max number > ', store[store.length -1])

// const maxNumber = Math.max(...data)
// console.log('max number > ', maxNumber)

// let maxNumber = data[0];
// for(let i = 0 ; i < data.length ; i++){
//     if(data[i] > maxNumber){
//         maxNumber = data[i];
//     }
// }
// console.log('max number > ', maxNumber)



// const data = [12,3,4,7,10,6,8,9];
// let maxNumber = data[0];

// for(let i =0 ; i < data.length ; i++){
//     if(data[i] > maxNumber){
//         maxNumber = data[i]
//     }
// }
// console.log('max number > ', maxNumber)

// console.log('Max number > ', Math.max(...data))

// By recursion
// const data = [12,3,4,7,10,6,8,9];

// function bigger(num1 , num2){
//     return num1 > num2 ? num1 : num2;
// };
// function findMax(array){
//     if(array.length === 1){
//         return array[0];
//     }
//     return bigger(array[0] , findMax[array.slice[1]])


// }

// const ans = findMax(data);
// console.log(ans)


// const data = [1,4,6,3,8,10,11];
// const data = [1];
// let maxNumber = data[0];

// for(let i = 0; i< data.length ; i++){
//     // if(data.length ==1){
//     //     maxNumber = data[0];
//     // }
//     if(data[i] > maxNumber){
//         maxNumber = data[i]
//     }

// }

// console.log('maxNumber > ', maxNumber)



const data = [1,4,6,3,8,13,10,11];
function bigger(num1 , num2){
    return num1 > num2 ? num1 : num2;
}
function findMax(arr){
    if(arr.length ===1){
        return arr[0];
    }
    return bigger(arr[0] , findMax(arr.slice(1)))
}

// const ans = findMax(data)
// console.log(ans)

// without slice
function findMax2(arr , startInd=0){
    if(arr.length === 0){
        return null;
    };
    if(startInd === arr.length -1){
        return arr[startInd]
    };
    return bigger(arr[startInd], findMax2(arr , startInd +1))
}
const ans2 = findMax2(data)
console.log('ans2',ans2) 