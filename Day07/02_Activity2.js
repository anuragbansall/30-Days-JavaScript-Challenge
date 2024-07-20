// Task3
let bookInfo = {
    title: "30 Days JavaScript",
    author: "Hitesh",
    year: 2024
}

bookInfo.getDetails = function(){
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
}
bookInfo.getDetails()

// Task4
bookInfo.updateYear = function(year){
    this.year = year
}
bookInfo.updateYear(2020)
console.log(bookInfo);