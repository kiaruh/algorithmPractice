class Cookie {
    constructor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
    setColor(color){
        this.color = color
    }
}

let cookieOne = new Cookie('red')
let cookieTwo = new Cookie('blue')

//Linklist 
class LinkedList {
    constructor(value){
        this.value = value
        this.next = null
    }
    append(value){
        let node = new LinkedList(value)
        let current = this
        while(current.next){
            current = current.next
        }
        current.next = node
    }
    print(){
        let current = this
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

//Pointer
class Pointer {
    constructor(value){
        this.value = value
        this.next = null
    }
}

//Pointer example
let obj1 = {value: 10}
let obj2 = obj1
console.log(obj1 === obj2)
let obj3 = {value: 20}
obj1 = obj3

console.log(obj1)
console.log(obj2)