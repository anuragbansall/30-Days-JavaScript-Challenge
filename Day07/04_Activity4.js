// Task7
let bookInfo = {
    title: "30 Days JavaScript",
    author: "Hitesh",
    year: 2024
}
bookInfo.getInfo = function(){
    console.log(`Title: ${this.title} Year: ${this.year}`);
}
bookInfo.getInfo()