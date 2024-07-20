let arr = [1, 2, 3, 4, 5, 6]
// Task7
let newArr = arr.map(el => el+el)
console.log(newArr);

// Task8
let filteredArr = arr.filter(el => el%2==0)
console.log(filteredArr);

// Task9
let sum = arr.reduce((acc, curr) => (acc+curr),0)
console.log(sum);