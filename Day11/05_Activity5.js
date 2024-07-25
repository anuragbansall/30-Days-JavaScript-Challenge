// Task8
const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 1 Resolved")
    }, 1000);
})

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 2 Resolved")
    }, 2000);
})

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 3 Resolved")
    }, 3000);
})

Promise.all([promise1, promise2, promise3])
.then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
})
.catch(error => {
    console.error(error);
});

Promise.race([promise1, promise2, promise3])
.then(result => {
    console.log(result);
})
.catch(error => {
    console.error('Error:', error);
});