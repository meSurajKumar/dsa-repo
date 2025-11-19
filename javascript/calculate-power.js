
// calculating power
// "2'2" , "2,4" , "2,3";
// ```
// 2*2 = 4
// 2*2*2*2 = 16
// 2*2*2 = 8
// 2*0 = 1
// 2*1 = 2
// ```
function clacultingPower(num , exp){
    if(exp === 0){
        return 1;
    }
    if(exp === 1){
        return num;
            
    }
    const halfPower = clacultingPower(num , Math.floor(exp/2))
    if(exp % 2 === 0){
        return halfPower * halfPower;
    }else{
        return halfPower * halfPower * num
    }
}
// console.log(clacultingPower("2^0 : ",num , exp))
console.log("2^0 : ",clacultingPower(2 , 0))
console.log("2^1 : ",clacultingPower(2 , 1))
console.log("2^2 : ",clacultingPower(2 , 2)) 
console.log("2^3 : ",clacultingPower(2 , 3))
console.log("3^3 : ",clacultingPower(3 , 3))


