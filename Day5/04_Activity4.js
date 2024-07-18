// Task7
function product(a, b=1){
    return a*b
}

console.log(product(2, 4));
console.log(product(5));

// Task8
function greeting(name, age=18){
    console.log(`User Name: ${name}, User Age: ${age}`);
}
greeting("Anurag", 19)
greeting("David")