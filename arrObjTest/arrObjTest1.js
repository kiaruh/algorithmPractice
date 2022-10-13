const { isMapIterator } = require("util/types")

const items = [
    { name: 'Bike', price: 100},
    { name: 'TV', price: 200 },
    { name: 'Chips', price: 10 },
    { name: 'Coke', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Earpods', price: 25 },
]

//Filter: 

const filteredItems = items.filter((item)=>
    item.price <= 100 
)

//console.log(filteredItems)

//Map:

// const mappedItems = items.map((item)=>
//     console.log(`Item: ${item.name}, the price is $${item.price}`)
// )

//Find: 

const findedItems = items.find((item)=>
    item.name === 'Chips'
)

// console.log(findedItems)

//ForEach

// items.forEach((item)=>
//     console.log(item.price*2)
// )

//Some: check some items returns true false

const hasInexpensive = items.some((item)=>
    item.price <= 300
)

// console.log(hasInexpensive)

//Every: it works similar to some but it will check the entire arr

const everyItem = items.every((item)=>
    item.price <= 1000
)

//Reduce: operation return the combination

const total = items.reduce((currentTotal,item)=>{
    return currentTotal + item.price
},0) //currentTotal starting at 0 

//console.log(total)

//Includes

const numbers = [1,2,3,4,5,6,7,8,9,10,'Pedro']

const includes = numbers.includes('Pedro')

// console.log(includes)