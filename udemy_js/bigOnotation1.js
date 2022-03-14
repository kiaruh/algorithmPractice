//Big O is always worst case

//O(2n) Drop constant time 
function logItems(n){
    for(var i = 0; i < n; i++){
        console.log(i);
    }
    for (var j = 0; j < n; j++){
        console.log(j);
    }
}

//O(nˆ2) Quadratic time
function logItems2(n){
    for(var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            console.log(i, j);
        }
    }
    
}

//Drop Non-Dominants O(nˆ2 + n) -> O(nˆ2)
function logItems2(n){
    for(var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            console.log(i, j);
        }
    }
    for (var k = 0; k < n; k++){
        console.log(k);
    }
    
}

//O(1) Constant time 
function addItems(n){
    return n + n;
}

//O(log n) Logarithmic time 3 steps = log2 8 = 3 -> 2ˆx = 8 -> x = 3

//O(nlogn) Some sorting algorithms are better than others

//Examples of Big O

// O(a + b)
function add(a, b){
    for (var i = 0; i < a; i++){
        console.log(i);
    }
    for (var j = 0; j < b; j++){
        console.log(j);
    }
}
// O(a * b)
function multiply(a, b){
    for (var i = 0; i < a; i++){
        for (var j = 0; j < b; j++){
            console.log(i, j);
        }
    }
}



