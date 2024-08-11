// conditional statements

const isRaining = true

// if else
if(isRaining) {
  console.log("bring umbrella")
}
else {
  console.log("no need of umbrella")
}

// ternary operator
isRaining ? console.log("bring umbrella") : console.log("no need od umbrella")

// short circuit
isRaining && console.log("bring umbrella")
isRaining || console.log("no need of umbrella ")

// else if 
const temperature = 30
if(temperature > 30)
{
  console.log("Hot weather")
}
else if("temperature >25")
{
  console.log("normal weather")
}
else{
  console.log("cold weather")
}

// nullish coelescing operator
const age = null
const result = age ?? "no age"
console.log(result)


// loop

const number = [ 1,2,3,4,5,6]
// for loop
for(var i=0; i<6; i++)
{
  console.log(number[i])
}

const names = ["Rekha","Jyoti","Bhupi"]
for(var i = 0 ; i < names.length; i++)
{
  console.log(names[1])
}
// for(let name of names )
// {
//   console.log(name)
//   console.log(names[2])
// }
