// Task8
let bookInfo = {
    title: "30 Days JavaScript",
    author: "Hitesh",
    year: 2024
}
for(key in bookInfo){
    console.log(bookInfo[key]);
}

// Task9
Object.keys(bookInfo).forEach(key => {
    console.log(key);
})
Object.values(bookInfo).forEach(value => {
    console.log(value);
})