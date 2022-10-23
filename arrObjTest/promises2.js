//Promise resolve reject then

let p = new Promise((resolve, reject)=>{
    let a = 1 + 1
    if(a ==2){
        resolve('Success')
    }else{
        reject('Failed')
    }
})


p.then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))

//Promise 
const userLeft = true
const userWatchingDogMeme = true

function watchPromise(){
    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                usuario: 'User left',
                msg:':('
            })
        }else if(userWatchingDogMeme){
            reject({
                usuario: 'User Watching Dogs memes',
                msg:'Dogs memes are better than you! hah'
            })
        }else{
            resolve('Yaay the user is not leaving!')
        }
    })
}

watchPromise().then((msg)=> console.log(msg)).catch((error)=>console.log(error))

// More promises 

const recordVideoOne = new Promise((resolve)=>{
    setTimeout(()=>
    resolve('Video 1')
    ,2000) 
})

const recordVideoTwo = new Promise((resolve)=>{
    resolve('Video 2')
})

const recordVideoThree = new Promise((resolve)=>{
    resolve('Video 3')
})

Promise.all([recordVideoOne,recordVideoTwo,recordVideoThree]).then((msg)=>console.log(msg)) // devuelve un array de las promesas
Promise.race([recordVideoOne,recordVideoTwo,recordVideoThree]).then((msg)=>console.log(msg)) // devuelve la primera promesa