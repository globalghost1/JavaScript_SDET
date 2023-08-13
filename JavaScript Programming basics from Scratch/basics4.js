//block of code
//var - global level/functional
//let - global level/block level {}

var greet = "Evening"

function add(a,b)
{
    
   return a+b
}
let sum =  add(2,3)
 console.log(sum)

 //do not have name==>Anonymous function --Function expressions

 let sumOfIntegers = function(c,d)
{
    return c+d
}

let sumOfNumbers = (c,d)=> c+d

console.log(sumOfNumbers(2,3))






