// Slice and Splice :- 

// Slice  ,  non-mutating (ye original arrya ko chnage ni kree ga)
// Splice  ,  mutating (ye original arrya ko chnage  kree ga [inset , delet , replace])

//  slice : ye array ka copy part nikalta hai (index se index tak)
// origina array change ni hota. 

const data = [ 'h', 'e', 'l', 'l', 'o', 'w' ];
// console.log(data.slice(data.length -1)) // last element
// console.log(data.slice(1,5)) // extract copy part
// console.log(data)

// Splice :- Ye array me inset , delete and replace krta hai , and ye original array ko chnage kr ta hai.
const spliceData = [ 'h', 'e', 'l', 'p', 'o', 'w' ];
// delete , start index and number of elements.
// console.log(spliceData.splice(2,2));// removing element.
// console.log(spliceData);

// inseting element
// spliceData.splice(3,0,8,9) // insertion
// console.log(spliceData);
// spliceData.splice(2,2,'u','k')
// console.log(spliceData);

// spliceData.splice(1,0,...['p','k','l','lo'])
// console.log(spliceData);

