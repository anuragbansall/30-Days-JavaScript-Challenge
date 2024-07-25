// Task6
new Promise((res, rej) => {
    let randomNum = Math.floor(Math.random()*10)+1
    if(randomNum<5){
        res()
    }else{
        rej()
    }
})
.catch(err => {
    console.log("Error1");
})

// Task7
async function asyncFunc(){
    try{
        await new Promise((res, rej) => {
            let randomNum = Math.floor(Math.random()*10)+1
            if(randomNum<5){
                res()
            }else{
                rej()
            }
        })
    }catch{
        console.log("Error2");
    }
}

asyncFunc()