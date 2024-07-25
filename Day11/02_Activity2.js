// Task3
new Promise((res, rej) => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => console.log(data.results[0].name))
    res()
})
.then(()=>{
    new Promise((res, rej) => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => console.log(data.results[0].name))
        res()
    })
})
.then(()=>{
    new Promise((res, rej) => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => console.log(data.results[0].name))
        res()
    })
})