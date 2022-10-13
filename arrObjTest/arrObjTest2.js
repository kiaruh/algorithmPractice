//Destructuring 

//Arr

// const alphabet = ['A','B','C','D','E','F','G']

// const numbers = ['1','2','3','4','5','6','7']

// const [primero,segundo,,cuarto,...elResto] = alphabet

// console.log(cuarto)

// console.log(elResto)

// const newArr = [...alphabet,...numbers]

// console.log(newArr)


// //another very useful way to use destructuring

// function sumMultiply(a,b) {
// return [a+b, a*b]
// }

// const [suma, multiplicacion] = sumMultiply(20,50)

// console.log(suma)
// console.log(multiplicacion)


//Objects:

const personOne = {
    name: 'Miguel',
    age: 50,
    address:{
        city: 'algunLugar',
        state: 'California'
    }
}

const personTwo = {
    name: 'Molly',
    age: 30,
    address:{
        city: 'molloCity',
        state: 'New York'
    }
}

const {name, address, address: {city}} = personTwo

// console.log(name)
console.log(address.city)
console.log(address)
console.log(city)



