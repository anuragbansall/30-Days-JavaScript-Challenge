// Task5
let arr = [1, 2, 3, 4, 5]
let newArr = [...arr, 6, 7, 8, 9, 10]
console.log(newArr);

// Task6
function sum(...nums){
    return nums.reduce((acc, curr) => acc+curr)
}

console.log(sum(1, 2, 3, 4, 5));