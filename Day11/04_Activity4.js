// Task6
new Promise((res, rej) => {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
        res(data)
    })
})
.then(data => {console.log(data.results[0])})

// Task7
async function fetchData(){
    let res = await fetch("https://randomuser.me/api/")
    let data = await res.json()

    console.log(data.results[0]);
}
fetchData()