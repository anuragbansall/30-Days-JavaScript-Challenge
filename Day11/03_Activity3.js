// Task4
async function asyncFunc1(){
    let res = await new Promise((res, rej) => {
        setTimeout(function(){
            res("Promise Resolved")
        }, 2000)
    })
    console.log(res);
    console.log("Bye1");
}
asyncFunc1()

// Task5
async function asyncFunc2(){
    try{
        let res = await new Promise((res, rej) => {
            setTimeout(function(){
                rej("Promise Rejected")
            }, 2000)
        })
        console.log(res);
    }catch(err){
        console.log(err);
    }
    console.log("Bye2");
}
asyncFunc2()