// traversing
// ```
// const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let element = -3 

// if(element<0){
//     element = data.length + element
// }

// console.log('element here >>',element)

// console.log('element > ', data[element])

// ```

// Insertion

// const data = [10, 20, 30, 40, 50];
// let position = 0
// let newElement = 4
// for(let i = data.length -1;i>=0;i--){
//     // console.log(`Index : ${i} : ${data[i]}`)
//     if(i>=position){
//         data[i+1]= data[i]
//         console.log('here >> ',data)
//         if(i===position){ 

//             data[i] = newElement
//         }
//     }
    
// }

// console.log('updated data >> ',data)

// My approach 
// const data = [10, 20, 30, 40, 50];
// let position =0
// let newElement = 4
// for(let i =data.length ; i>=position;i--){
//         data[i] = data[i-1]
//     }
// console.log('data before >>> ',data)
// data[position]=newElement
// console.log('data >>> ',data)


// const data = [10, 20, 30, 40, 50]
// const position = 1
// const element = 4

// for(i=data.length-1;i>=0;i--){
//     // Now position match case
//     if(i>=position){
//         data[i+1] = data[i]
//     }    
// }
// data[position] = element

// console.log('here this is data >> ',data)



// for(let i = data.length; i>position; i--){
//     console.log('i value >> ',i, 'value ',data[i])
//     data[i] = data[i-2]
//     // console.log('data i value ::: ',data[i])

// }

// data[position]=newElement

// for(i=0;i<=data.length;i++){
//     console.log('i > ',i)

//     if(i==position){
//         console.log('here in this condition ',i)
//         data[i+1]=data[i]
//     }

// }
// console.log('My code response >> ',data)

const data = [10, 20, 30, 40, 50];
const position = 1
const element = 4

for(i=data.length-1;i>=0;i--){
    if(i>=position){
        data[i+1]= data[i]
    }
}
data[position] = element
console.log('data > new', data)









