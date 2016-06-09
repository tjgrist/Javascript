"use strict"
function fizzbuzz(number){
    var counter = 0;
    while(counter < number){
        if (counter % 3 == 0 && counter % 5 == 0){
            console.log("fizzbuzz");
        }
        else if (counter % 3 == 0){
            console.log("buzz");
        }
        else if (counter % 5 == 0){
            console.log("fizz");
        }
        else{
            console.log(counter);
        }
        counter++;
    }
}
fizzbuzz(1000);