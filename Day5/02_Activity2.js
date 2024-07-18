// Task3
const maxNum = function(a, b){
    if(a>b){
        console.log(`${a} is greater than ${b}`);
    }else{
        console.log(`${b} is greater than ${a}`);
    }
}

maxNum(32, 45)
maxNum(54, 21)

// Task4
const concatStr = function(str1, str2){
    return "".concat(str1, " ", str2)
}
console.log(concatStr("Anurag", "Bansal"));