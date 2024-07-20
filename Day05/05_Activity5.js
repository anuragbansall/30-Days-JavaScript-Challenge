// Task9
function repeatFunc(func, n){
    for(let i=1; i<=n; i++){
        func()
    }
}
function hello(){
    console.log("Hello WOrld!");
}
repeatFunc(hello, 5)

// Task10
function applyValue(func1, func2, value) {
    let res1 = func1(value);
    let res2 = func2(res1);
    return res2;
}

function func1(x) {
    return x + 1;
}

function func2(y) {
    return y * y;
}

console.log(applyValue(func1, func2, 5));
