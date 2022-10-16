//counting characters in a string

function contarChar(chain){
    let auxobj = {}
    for(let i in chain){
        let ch = chain[i]
        if(!auxobj[ch]){
            auxobj[ch] = 0
        }
        auxobj[ch]++
    }
    return auxobj
}

// console.log(contarChar('hola como estas en el dia de h'))

