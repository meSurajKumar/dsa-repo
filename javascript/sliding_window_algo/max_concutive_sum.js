let = arr = [2,1,5,1,3,2], k = 3;


function maxSum(arr , k){
    let n = arr.length;
    if(n<k){
        console.log('window size is larger than array')
        return -1
    };
    let maxSum = 0;
    for(let i=0 ; i<k ;i++){
        maxSum += arr[i]
    }

    return maxSum


}


const answer = maxSum(arr ,k);
console.log('answer',answer)