const numbers = [4,5,6,7];
const users = [
    {'name':'raj', age :23},
    {'name':'raj2', age :21},
    {'name':'raj3', age :24},
    {'name':'raj4', age :18},
    {'name':'raj5', age :17},
    {'name':'raj6', age :12},
]

// function myFunction(num){
//     console.log(`Product is ${num} * 2 : ${num * 2}`)

// } 

// numbers.forEach(function(num , index){
    // console.log(`Product is ${num} * 2 : ${num * 2}`)
// numbers.forEach(myFunction)


// users.forEach(function(user){
//      if(user.age > 18){
//         console.log(user.name)
//      }
// })

// const userData = users.filter(function(user){
//     if(user.age > 18)  return user 
// }) 

// console.log('user data :: ', userData)



// const userData = [
//     {id : 1 , pName :'a' , pPrice : 300},
//     {id : 2 , pName :'as' , pPrice : 600},
//     {id : 3 , pName :'ad' , pPrice : 400},
//     {id : 4 , pName :'af' , pPrice : 700},
//     {id : 5 , pName :'ag' , pPrice : 100},
// ]


// const totalAmount = userData.reduce((acc , cvalue)=>{
//     return acc + cvalue.pPrice
// },0)

// console.log('total price : ', totalAmount)


const sum = [1,2,3,4,5]

const sumis = sum.reduce((acc , curr)=>{
    return acc + curr
},0)


console.log('sumis : ' , sumis)








