// function
// functions are reusable block of code written to overcome repetition and more.

// regular function
function add(a,b)
// a ,b are parameters
{
  console.log(a+b)
}
add(15,67)
// 15 , 67 are arguments

function add(a,b,c=1454)
{
  console.log(a+b+c)
}
add(1,54)

// name function
let addition = function(a,b,c)
{
  console.log(a+b+c)
}
addition(1,3,6)

// arrow function
let multiply = (a,b,c) => 
  {
    console.log (a*b*c)
    console.log("hyy")
  }
multiply(34,56,89)

// anonymous functiion
// (()=>{
//    console.log(1+2)
//    })()

const square = (a)=>
{
  console.log(a*a)
}
square(5)

const result = square(9)
console.log(result)

var add = function()
{
  console.log(1+1)
}

