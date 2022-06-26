const fs = require('fs')
let path = 'miniDB.txt'

const user = {
    name: 'John',
    description: "Niguiri x 1",
    orderNumber: "000002",
    totalPrice: "$100"
}

const userString = JSON.stringify(user)

// const nuevoUser = `Name: ${user.name}, Desc: ${user.description}, OrderNum: ${user.orderNumber}, Total: ${user.totalPrice}`

fs.writeFileSync(path,userString) 

// console.log(userString)

// if (si existe el archivo miniDB)
// traeme todo el archivo y concatename lo nuevo sobre lo viejo y volvelo a escribir en el archivi miniDB.txt 

