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

if(reverseWord === word) {
    console.log('The word is a palindrome')
}else{
    console.log('The word is not a palindrome')
}

console.log(reverseWord)