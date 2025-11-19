function fib(num){
    if(num<=1){
        return num;
    };
    return fib(num -1) + fib(num -2);
}

console.log('0',fib(0))
console.log('1',fib(1))
console.log('2',fib(2))
console.log('3',fib(3))
console.log('4',fib(4))  