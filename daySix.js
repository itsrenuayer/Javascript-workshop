// map
const people =[
  {
    firstName : "Bhupi",
    lastName : "Ayer"
  },
  {
    firstName:'Jyoti',
    lastName : 'Ayer'
  }
]
const data= people.map(function(person){
  // console.log(person)
  return {
    firstName : person.firstName,
    lastName : person.lastName,
    fullName : person.firstName + person.lastName
  }
})
console.log(data)

// example2
const products = [
 { name : 'apple',
  price:200,
  qty : 2
 },
 {name : 'mango',
  price : 250,
  qty :5
 }
]
const newProducts = products.map(function (products)
{
  return {
    name : products.name,
    price : products.price,
    qty : products.qty,
    total : products.price * products.qty
  }
})
console.log(newProducts)

// example3
const nums = [1,2,3,4,5]
const newNums = nums.map(function(nums)
{
  return {
    squres : nums * nums

  }
}
)
console.log(newNums)

// filter
const numbers = [1,2,3,4,5,6,7,8,9,10]
 const evenNums = numbers.filter(function(nums)
{
  return nums % 2 ==0
})
console.log(evenNums)

// example2
const books = [
  {
    title : 'Mahabir Pun',
    year : 2023
  },
  {
    title : 'Think like a monk',
    year : 2020
  }
]

 const  newBooks = books.filter(function(books)
{
  return books.year >2000
})
console.log(newBooks)