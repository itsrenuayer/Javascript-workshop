// slice : used to create a copy of portion of array , doesnot modify original array.
const numbers = [1,2,3,4,5,6]
const newNumber = numbers.slice(0,3)
// o : from where to cut 
// 3 : upto which index to cut but 3 is exclusive i.e. [1,2,3]
console.log (newNumber)


// splice : used to create a copy of array like slice but it gives addition feature to replace items . it modifies the original array 
numbers.splice(0,2,100,200)
console.log (numbers)

numbers.splice(2,1,100,101)
console.log(numbers)


// split : 
const text="I love Js"
const newArray = text.split(" ")
console.log(newArray)

// task1
const languages = ["php","Js","c"]
languages.splice(1,1,"html")
console.log(languages)

// task2
const characters = ["m","a","n","i","s","h"]
characters.splice(0,6,13,1,14,19,8)
console.log(characters)

// Object
const me = {
      name : "Renu Ayer", 
     address : "KTM", 
       isNepali : true 
  }
  Object.freeze(me)
  // freeze() can make object unchangable/static
  me.college = "SNSC"
   console.log(Object.keys(me))
  console.log(Object.values(me))

  // casing 
  //  camelCase 
  
  firstname --> camelCase -- > firstName
  ilovejavascript --> camelCase -- > iLoveJavascript 
   ihateprogramminginfortan --> camelCase --> iHateProgrammingInFortan
  
   // snake_case 
   firstname --> snake_case --> first_name
   ilovejavascript --> snake_case --> i_love_javascript
  
   // kebab-case 
  firstname ---> kebab-case --> first-name
   ilovejavascript --> i-love-javascript
  
  // PascalCase 
   firstname --> PascalCase --> FirstName
   ilovejavascript ---> ILoveJavascript 
   ihateprogramminginfortan ---> IHateProgrammingInFortan