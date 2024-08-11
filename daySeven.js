// filter example
const files = ['app.js','a.c','index.html','style.css','script.js']
const result = files.filter(function(file){
return file.endsWith('.js')
})
console.log(result)

// reduce
// example1
const numbers = [1,2,3,4,5]
const sum = numbers.reduce(function(accumulator,number){
return number + accumulator
},2)
console.log(sum)

// example2
const myCarts = [
  {
    product : 'apple',
    price : 200,
    qty : 20
  },
  {
    product : 'orange',
    price : 250,
    qty : 10
  },
  {
    product : 'lichi',
    price : 100,
    qty : 30
  },
]
// total qty , total price
 const output = myCarts.reduce(function(acc,item){
acc.totalPrice += item.price * item.qty
// acc.totalPrice = acc.totalPrice + (item.price*item.qty)
acc.totalQty = acc.totalQty + item.qty
// acc.totalQty += item.qty
return acc
},{totalPrice : 0,totalQty :0})
console.log(output)

const students = [
  {
    name : 'Manish',
    marks : 700,
    status : 'pass'
  },
  {
    name : 'Anuj',
    marks : 250,
    status : 'fail'
  },
  {
    name : 'Aasish',
    marks : 400,
    status : 'fail'
  },
  {
    name : 'Sam',
    marks : 900,
    status : 'pass'
  }
]
// marks>300 , name ends with sh , passed 
const person = students.filter(function(students){
  return students.marks>300 && students.name.endsWith('sh') && students.status =="pass"
 
})
console.log(person)