"use strict"
var fs = require('fs');

var readMe = function(){
    fs.readFile("\ReadThis.txt", 'utf8', function (err, data){
        if (err) throw err;
        console.log(data);
    })
}
var partiallyApply = function(fn, filename){
    if (arguments.length === 2){
        fn(filename);
    }
    else if (typeof(arguments[0]) === "function"){
        return function(filename){
            fn(filename);
        }    
    }
    else if (typeof(arguments[0]) === "string"){
        return function(fn){            
            fn(filename);
        }
    }
}
var appendThis = function(filename){
    var contents = fs.readFileSync(filename, "utf8");
    var lines = contents.split('\n');
    var writeLines = lines.map(function(line){ return line + " Appension!!!"})
    fs.appendFileSync(filename, " //Appended something\n", 'utf8')       
}

//partiallyApply(appendThis, '\ReadThis.txt');
var onlyFunc = partiallyApply(appendThis);
onlyFunc('\ReadThis.txt');
// var onlyFilename = partiallyApply("\ReadThis.txt");
// onlyFilename(appendThis);
readMe();
