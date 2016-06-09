"use strict"
var fibonacci_recursive_ = function(n){
    if (n == 0 || n == 1){
        return n;
    }
    else {
        return fibonacci_recursive_(n-1) + fibonacci_recursive_(n-2);
    }
}
function printFibonacciSequence(x){
    for (var i = 0; i < x; i++){
        console.log(fibonacci_recursive_(i));
    }    
}
printFibonacciSequence(20);
