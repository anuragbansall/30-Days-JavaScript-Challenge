// Task1
const promise1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Promise1 Resolved')
    }, 2000)
})

promise1
.then(mssg => {console.log(mssg)})
.catch(err => {console.log(err)})

// Task2
const promise2 = new Promise((resolve, reject) => {
    setTimeout(function(){
        reject('Promise2 Rejected!')
    }, 2000)
})

promise2
.then(mssg => {console.log(mssg)})
.catch(err => {console.log(err)})