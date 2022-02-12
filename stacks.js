// stacks - data structure
// functions - push, pop, peek, length, isEmpty, size 


//palindrome
var letters = [] // this is a stack

var word = 'racecar'

var reverseWord = ''

// put letters in stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i])
}

// pop off letters and put in reverse order
for (var i = 0; i < word.length; i++) {
    reverseWord += letters.pop()
}

// compare reverseWord with word
if(reverseWord === word) {
    console.log('The word is a palindrome')
}else{
    console.log('The word is not a palindrome')
}

// console.log(reverseWord)

//#############################################################################
// MAKING A STACK on my own

var stack = function(){
    this.count = 0
    this.storage = {}

    //Adds a value onto the end of the stack
    this.push = (value) => {
        this.storage[this.count] = value
        this.count++
    }

    //Removes and returns the value at the end of the stack
    this.pop = () => {
        if(this.count === 0){
            return undefined
        }
        //if there is a value in the stack then we will remove it and return it
        this.count--
        var result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    //Size returns the number of items in the stack
    this.size = () => {
        return this.count
    }

    //Returns the value at the end of the stack
    this.peek = () => {
        return this.storage[this.count - 1]
    }
    //Returns true if the stack is empty, and false otherwise
    this.isEmpty = () => {
        return this.count === 0
    }
    //Returns the whole stack
    this.print = () => {
        return this.storage
    }
}

var myStack = new stack()

myStack.push('a')
myStack.push('b')
myStack.push(3)
console.log(myStack.print())
console.log(myStack.size())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.print())
console.log(myStack.size())


