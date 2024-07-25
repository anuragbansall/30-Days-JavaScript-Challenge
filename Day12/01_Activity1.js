// Task1
function genError(){
    throw new Error("This is a custom error message");
}

try {
    genError();
} catch (err) {
    console.log("Error:", err.message);
}

// Task2
function divide(num1, num2){
    if(num2 === 0){
        throw new Error("Denominator can't be zero")
    }
    console.log(num1/num2);
}

try{
    divide(5, 0)
}catch(err){
    console.log("Error:", err.message);
}