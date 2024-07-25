// Task3
function genError(){
    throw new Error("Custom Error")
}

try{
    genError()
    console.log("This ia a try block");
}catch{
    console.log("This ia a catch block");
}finally{
    console.log("This is a finally block");
}