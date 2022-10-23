//callbacks -> son bloqueantes

const operation = (num1, num2, callback) => {
    return callback(num1,num2)
}

// console.log(operation(1,2,(a,b)=> a+b))
// console.log(operation(1,2,(a,b)=> a-b))
// console.log(operation(1,2,(a,b)=> a/b))
// console.log(operation(1,2,(a,b)=> a*b))

//callback sync 

const syncWithCallback = (num1,num2,cb) => {
    const resultado = num1+num2
    return setTimeout(()=>{
        cb(resultado)
    },2000)
}

syncWithCallback(1,3, (msg)=> console.log(msg))


//promises -> asyncrono

const asyncWithPromise =(num1,num2) => {
    const resultado = num1+num2
    return new Promise(resolve=> { // tmb se puede poner (resolve,reject) => { }
        setTimeout(()=>{
            resolve(resultado)
        },1000)
    })


}

asyncWithPromise(1,3).then(result=>console.log(result))

// const resultadoAwait = await asyncWithPromise(2,5)

// console.log(resultadoAwait)


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();