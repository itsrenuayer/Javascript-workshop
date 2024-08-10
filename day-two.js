// variables are the container to store values. 
var x = 1234
// variable is a container to store value.
 const name = "Sam" 
//  sting variable 
const age = 27
// integer variables
const isNepali = true
// boolean variable : true/false
const fruits = [ "Apple" , "Mango" , "Strawberry" , "Lichi"]
// array variable : similar data  (array name = fruits) / square beacket
const me = {
name : "Sam Chand",
age : 27,
address : "Japan",
isnepali : true
}
// object variable is used to store the data related to one topic
console.log (fruits[0])
// to print the value from array variable : (variable name [index])


// properties and methods
console.log(fruits.length)
// if we want to add more value in array
fruits.push("Banana")
// if we add more value in array at last
console.log(fruits)
// if we add more value in array at first
fruits.unshift("peach")
console.log(fruits)

// if we want to remove last item 
fruits.pop()
console.log(fruits)

// if we want to remove first item 
fruits.shift()
console.log(fruits)
// if we want to add items in array 
fruits[2] = "Pear"
fruits[0] = "Grapes"
console.log(fruits)

// splice
fruits.splice(2,0, "apple")
console.log(fruits)