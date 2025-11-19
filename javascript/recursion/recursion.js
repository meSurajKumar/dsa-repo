// function factorial(n){
//     if(n==1){
//         return 1
//     }
//     return n * factorial(n-1)
// }

// console.log(factorial(5))

// let data = [1,2,3,4,5,6]

// const printArray = (arr, index=0)=>{
//     if(index == arr.length) return
//     console.log(arr[index])
//     printArray(arr , index+1)
// }
// printArray(data)



// const array1 = [1,2,3,4]
// const array2 = [1,2,3,4,5]

// const reverseArray = (array , left = 0 , right = array.length-1)=>{
//     if(left >= right) return;
//     const temp = array[left];
//     array[left] = array[right]
//     array[right] = temp;
    
//     reverseArray(array , left+1 , right-1)


// }


// reverseArray(array1)
// reverseArray(array2)
// console.log('array 1 : ', array1)
// console.log('array 2 : ', array2)

// const array1 = [1,2,3,4]
// const array2 = [1,2,3,4,5]

// const reverseArray = (arr , left = 0 , right = arr.length - 1)=>{
//     if(left>= right) return;

//     const temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     reverseArray(arr , left+1 , right-1)


// }

// reverseArray(array1)
// console.log(array1)


// const userName = 'wocsw';

// const palindromCheck = (name , left = 0 , right = name.length -1) =>{
//     if(left >= right){
//         return true;
//     }  
//     if(name[left] !== name[right]){
//         return false;
//     }
//     return palindromCheck(name , left +1 , right -1 )
    

// }

// const nameReverse = palindromCheck(userName)
// console.log(nameReverse)





// const userName = 'naman';

// const palindromeCheck = (name, left = 0 , right = userName.length-1)=>{
//     if(left >= right){
//         return true;
//     }
//     if(name[left] !== name[right]){
//         return false;
//     }

//     return palindromeCheck(name , left +1 , right-1)



// }

// console.log(palindromeCheck(userName))